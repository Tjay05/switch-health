import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Alert, Button, Modal, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Paystack, paystackProps } from "react-native-paystack-webview";

import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { LogBtn } from "../../account/components/account.styles";
import { NoAppWrapper } from "../../appointment/components/Appointment.styles";
import { CartDescription, CartDetailWrap, CartFooter, CartImg, CartItemBox, CartItemDetails, CartItemPrice, CartItems, CartPaymentWrapper, CartQtyWrap, CartWrapper, ItemName, ItemSize, PayItems, PayTextHead, PayTexts, PharmacyContainer, PharmacyWrapper, PlusWrap, QtySelector, SummaryWrap, TotalText } from "../components/Pharmacy.styles";

import EmptyCartSVG from "@/assets/icons/EmptyCartSvg";
import { theme } from "@/src/infrastructure/theme";
import Loading from "@/src/components/loader";
import BadGateWay from "@/src/components/NoNetwork";

const CartScreen = ({ navigation }) => {
  const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error retrieving stored data:", error);
    }
  };
  
  const handleGetDetails = async () => {
    setIsLoading(true);
    setIsApiCallFailed(false);

    try {
      const response = await fetch(
        `https://switch-health.onrender.com/patient/${userData.data.user._id}/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userData.data.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setEmail(data.data.email || "");
        setNumber(data.data.phone || "");
        setIsApiCallFailed(false);
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
        setIsApiCallFailed(true);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setIsApiCallFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (userData) {
      handleGetDetails();
    }
  }, [userData]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const currentCart = await AsyncStorage.getItem('cart');
        setCart(currentCart ? JSON.parse(currentCart) : []);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      }
    };
    fetchCart();
  }, []);

  const handleRefresh = async () => {
    await handleGetDetails();
  };

  const add = (index) => {
    const newCart = [...cart];
    newCart[index].count += 1;
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const subtract = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 0) {
      newCart[index].count -= 1;
      setCart(newCart);
      AsyncStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  const totalAmount = calculateTotal();

  return (
    <>
      {isLoading && <Loading />}
      {isApiCallFailed ? (
        <BadGateWay handleRefresh={handleRefresh} />
      ) : (
        <PharmacyWrapper showsVerticalScrollIndicator={false}>
          <PharmacyContainer>
            { cart.length ? (
              <CartWrapper>
                <CartItems>
                  {cart.map((item, index) => (
                    <CartItemBox key={index}>
                      <CartImg source={item.image} />
                      <CartDetailWrap>
                        <CartItemDetails>
                          <CartDescription>
                            <ItemName>{item.name}</ItemName>
                            <ItemSize>{item.quantity}</ItemSize>
                          </CartDescription>
                          <TouchableOpacity onPress={() => removeItem(index)}>
                            <SimpleLineIcons name="trash" size={20} color='#221F1F99'/>
                          </TouchableOpacity>
                        </CartItemDetails>
                        <CartQtyWrap>
                          <QtySelector>
                            <TouchableOpacity onPress={() => subtract(index)}>
                              <FontAwesome6 name='minus' size={18} />
                            </TouchableOpacity>
                            <Text variant='main1' >{item.count}</Text>
                            <PlusWrap  onPress={() => add(index)} >
                              <Ionicons name="add" size={18} color='white' />
                            </PlusWrap>
                          </QtySelector>
                          <CartItemPrice>₦{item.price}</CartItemPrice>
                        </CartQtyWrap>
                      </CartDetailWrap>
                    </CartItemBox>
                  ))}
                </CartItems>
                <CartPaymentWrapper>
                  <Spacer position="bottom" size="large">
                    <PayTextHead>Payment Detail</PayTextHead>
                  </Spacer>
                  <PayItems>
                    <PayTexts>SubTotal</PayTexts>
                    <PayTexts>₦{totalAmount}</PayTexts>
                  </PayItems>
                  <PayItems>
                    <PayTexts>Taxes</PayTexts>
                    <PayTexts>₦0.00</PayTexts>
                  </PayItems>
                  <PayItems>
                    <TotalText>Total</TotalText>
                    <TotalText>₦{totalAmount}</TotalText>
                  </PayItems>
                </CartPaymentWrapper>
                <CartFooter>
                  <SummaryWrap>
                    <PayTexts>Total</PayTexts>
                    <TotalText>₦{totalAmount}</TotalText>
                  </SummaryWrap>
                  <Paystack
                    paystackKey="pk_live_12c52b7e3887c200b19a101a9273313807053282"
                    billingEmail={email}
                    amount={totalAmount}
                    activityIndicatorColor='red'
                    onCancel={(e) => {
                      console.log(e);
                      setModalVisible(false);
                    }}
                    onSuccess={(res) => {
                      Alert.alert(`succesful: ${res}`)
                    }}
                    ref={paystackWebViewRef}
                  />
                  <LogBtn onPress={() => setModalVisible(true)}>Checkout</LogBtn>
                </CartFooter>

                <Modal
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styls.modalBackground}>
                    <View style={styls.modalContainer}>
                      <Text variant='place'>Confirm details to make payment</Text>
                      <Text style={styls.labbel}>Email</Text>
                      <TextInput
                        value={email}
                        style={styls.inputfield}
                      />
                      {/* <Text style={styls.labbel}>Phone number</Text>
                      <TextInput
                        value={number}
                        style={styls.inputfield}
                      /> */}
                      <Text style={styls.labbel}>Amount</Text>
                      <TextInput
                        value={`₦${totalAmount}`}
                        style={styls.inputfield}
                      />
                      <View style={styls.buttonContainer}>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                        <Button title="Confirm Payment" onPress={() => paystackWebViewRef.current?.startTransaction()} />
                      </View>
                    </View>
                  </View>
                </Modal>

              </CartWrapper>
            ) : (
              <NoAppWrapper>
                <Spacer position="bottom" size="extraLarge">
                  <EmptyCartSVG/>
                </Spacer>
                <Spacer position="bottom" size="large">
                  <Text variant='place'>Oops! Your cart is empty</Text>
                </Spacer>
                <LogBtn onPress={() => navigation.navigate('Pharmacy')}>Shop Now</LogBtn>
              </NoAppWrapper>
            ) }
          </PharmacyContainer>
        </PharmacyWrapper>
      )}
    </>
  );
}

const styls = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }, 
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputfield: {
    width: '100%',
    height: 35,
    marginBottom: 4,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    paddingHorizontal: 12,
    borderColor: 'hsla(0, 0%, 62%, 1)',
    color: 'hsla(0, 0%, 62%, 1)',
    borderWidth: 1,
    fontFamily: theme.fonts.poppinsRegular,
  },
  labbel: {
    fontSize: 14,
    color: 'hsla(0, 0%, 42%, 1)',
    fontFamily: theme.fonts.poppinsMedium,
  }
});
 
export default CartScreen;