import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useState } from "react";
import { LogBtn } from "../../account/components/account.styles";
import { NoAppWrapper } from "../../appointment/components/Appointment.styles";
import { CartDescription, CartDetailWrap, CartFooter, CartImg, CartItemBox, CartItemDetails, CartItemPrice, CartItems, CartPaymentWrapper, CartQtyWrap, CartWrapper, ItemName, ItemSize, PayItems, PayTextHead, PayTexts, PharmacyContainer, PharmacyWrapper, PlusWrap, QtySelector, SummaryWrap, TotalText } from "../components/Pharmacy.styles";

import DrugPic from '../../../../assets/images/drugbox.png';
import { FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState(['']);
  const [count, setCount] = useState(1);

  const add = () => setCount(count + 1);
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <PharmacyWrapper showsVerticalScrollIndicator={false}>
      <PharmacyContainer>
        { cart.length ? (
          <CartWrapper>
            <CartItems>
              <CartItemBox>
                <CartImg source={DrugPic} />
                <CartDetailWrap>
                  <CartItemDetails>
                    <CartDescription>
                      <ItemName>OBH Combi</ItemName>
                      <ItemSize>75ml</ItemSize>
                    </CartDescription>
                    <SimpleLineIcons name="trash" size={20} color='#221F1F99'/>
                  </CartItemDetails>
                  <CartQtyWrap>
                    <QtySelector>
                      <TouchableOpacity onPress={subtract}>
                        <FontAwesome6 name='minus' size={18} />
                      </TouchableOpacity>
                      <Text variant='main1' >{ count }</Text>
                      <PlusWrap  onPress={add} >
                        <Ionicons name="add" size={18} color='white' />
                      </PlusWrap>
                    </QtySelector>
                    <CartItemPrice>$9.99</CartItemPrice>
                  </CartQtyWrap>
                </CartDetailWrap>
              </CartItemBox>
            </CartItems>
            <CartPaymentWrapper>
              <Spacer position="bottom" size="large">
                <PayTextHead>Payment Detail</PayTextHead>
              </Spacer>
              <PayItems>
                <PayTexts>SubTotal</PayTexts>
                <PayTexts>N0. 00</PayTexts>
              </PayItems>
              <PayItems>
                <PayTexts>Taxes</PayTexts>
                <PayTexts>N 0.00</PayTexts>
              </PayItems>
              <PayItems>
                <TotalText>Total</TotalText>
                <TotalText>N 0.00</TotalText>
              </PayItems>
            </CartPaymentWrapper>
            <CartFooter>
              <SummaryWrap>
                <PayTexts>Total</PayTexts>
                <TotalText>N 10.00</TotalText>
              </SummaryWrap>
              <LogBtn>Checkout</LogBtn>
            </CartFooter>
          </CartWrapper>
        ) : (
          <NoAppWrapper>
            <Spacer position="bottom" size="extraLarge">

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