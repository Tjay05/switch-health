import { BtnWrap, CartPriceWrap, DetailFooter, DetailText, DrugDetailImage, Drugheader, DrugPicWrap, ItemName, ItemPriceTag, ItemRateTag, ItemRateWrap, ItemSize, PharmacyContainer, PharmacyWrapper, PlusWrapper, QuantitySelector } from "../components/Pharmacy.styles";

import Text from "@/src/components/typograpghy/Text.component";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { LogBtn } from "../../account/components/account.styles";

const PharmDetails = ({ route }) => {
  const { drug } = route.params;

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
        <DrugPicWrap>
          <DrugDetailImage source={drug.image} />
        </DrugPicWrap>
        <Drugheader>
          <ItemName>{ drug.name }</ItemName>
          <ItemSize>{ drug.quantity }</ItemSize>
          <ItemRateWrap>
            <Ionicons name="star" size={18} color='#1A1F71' />
            <ItemRateTag>{ drug.rating }</ItemRateTag>
          </ItemRateWrap>
        </Drugheader>
        <CartPriceWrap>
          <QuantitySelector>
            <TouchableOpacity onPress={subtract}>
              <FontAwesome6 name='minus' size={23} />
            </TouchableOpacity>
            <Text variant='caption' >{ count }</Text>
            <PlusWrapper  onPress={add} >
              <Ionicons name="add" size={23} color='white' />
            </PlusWrapper>
          </QuantitySelector>
          <ItemPriceTag>{ drug.price }</ItemPriceTag>
        </CartPriceWrap>
        <DetailFooter>
          <ItemName>Description</ItemName>
          <DetailText>{ drug.description }</DetailText>
        </DetailFooter>
        <BtnWrap>
          <LogBtn>Add to cart</LogBtn>
        </BtnWrap>
      </PharmacyContainer>
    </PharmacyWrapper>
  );
}
 
export default PharmDetails;