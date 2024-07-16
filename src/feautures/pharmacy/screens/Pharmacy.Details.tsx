import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BtnWrap, CartPriceWrap, DetailFooter, DetailText, DrugDetailImage, Drugheader, DrugImage, DrugPicWrap, ItemName, ItemPriceTag, ItemRateTag, ItemRateWrap, ItemSize, PharmacyContainer, PharmacyWrapper, PlusWrapper, QuantitySelector } from "../components/Pharmacy.styles";
import Text from "@/src/components/typograpghy/Text.component";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { LogBtn } from "../../account/components/account.styles";

interface PharmDetailsProps {
  route: {
    params: {
      drug: {
        name: string;
        image: string;
        quantity: string;
        count: number,
        rating: number;
        price: number;
        description: string;
      };
    };
  };
}

const PharmDetails: React.FC<PharmDetailsProps> = ({ route }) => {
  const { drug } = route.params;

  const [count, setCount] = useState(drug.count);

  const add = () => {
    setCount(count + 1);
    drug.count += 1;
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
      drug.count -= 1;
    }
  };

  const addToCart = async () => {
    try {
      const currentCart = await AsyncStorage.getItem('cart');
      let cart = currentCart ? JSON.parse(currentCart) : [];
      const itemIndex = cart.findIndex(item => item.name === drug.name);
      if (itemIndex > -1) {
        cart[itemIndex].count += count;
      } else {
        cart.push({ ...drug, count });
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      alert("Added to cart");
    } catch (error) {
      console.error("Failed to add to cart", error);
      alert("Failed to add to cart");
    }
  };

  return (
    <PharmacyWrapper showsVerticalScrollIndicator={false}>
      <PharmacyContainer>
        <DrugPicWrap>
          <DrugDetailImage source={drug.image} />
        </DrugPicWrap>
        <Drugheader>
          <ItemName>{drug.name}</ItemName>
          <ItemSize>{drug.quantity}</ItemSize>
          <ItemRateWrap>
            <Ionicons name="star" size={18} color="#1A1F71" />
            <ItemRateTag>{drug.rating}</ItemRateTag>
          </ItemRateWrap>
        </Drugheader>
        <CartPriceWrap>
          <QuantitySelector>
            <TouchableOpacity onPress={subtract}>
              <FontAwesome6 name="minus" size={23} />
            </TouchableOpacity>
            <Text variant="caption">{drug.count}</Text>
            <PlusWrapper onPress={add}>
              <Ionicons name="add" size={23} color="white" />
            </PlusWrapper>
          </QuantitySelector>
          <ItemPriceTag>₦{drug.price}</ItemPriceTag>
        </CartPriceWrap>
        <DetailFooter>
          <ItemName>Description</ItemName>
          <DetailText>{drug.description}</DetailText>
        </DetailFooter>
        <BtnWrap>
          <LogBtn onPress={addToCart}>Add to cart</LogBtn>
        </BtnWrap>
      </PharmacyContainer>
    </PharmacyWrapper>
  );
};

export default PharmDetails;
