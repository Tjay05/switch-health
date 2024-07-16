import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { LogBtn } from "../../account/components/account.styles";
import { NoAppWrapper } from "../../appointment/components/Appointment.styles";
import { CartDescription, CartDetailWrap, CartFooter, CartImg, CartItemBox, CartItemDetails, CartItemPrice, CartItems, CartPaymentWrapper, CartQtyWrap, CartWrapper, ItemName, ItemSize, PayItems, PayTextHead, PayTexts, PharmacyContainer, PharmacyWrapper, PlusWrap, QtySelector, SummaryWrap, TotalText } from "../components/Pharmacy.styles";

import { FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import EmptyCartSVG from "@/assets/icons/EmptyCartSvg";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

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
              <LogBtn>Checkout</LogBtn>
            </CartFooter>
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
  );
}
 
export default CartScreen;