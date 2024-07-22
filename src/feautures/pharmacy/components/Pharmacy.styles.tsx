import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";

export const PharmacyWrapper = styled(ScrollView)`
  background-color: #fff;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const PharmacyContainer = styled(View)`
  flex: 1;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-horizontal: auto;
  margin-vertical: ${(props) => props.theme.space[3]};
`;

export const ItemBox = styled(TouchableOpacity)`
  border-radius: 7px;
  background-color: #407CE221;
  width: 45%;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: #0000000D;
`;

export const DrugImage = styled(Image)`
  width: 100%;

`;

export const ItemInfo = styled(View)`
  background-color: #fff;
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
  border-radius: 15px 15px 0px 0px;
`;

export const DrugName = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.min};
`;

export const PriceWrap = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceTag = styled(Text)`
  color: #407CE2;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.min};
`;

export const RateWrap = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.space[1]};
`;

// Details Styles
export const DrugPicWrap = styled(View)`
  width: 100%;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const DrugDetailImage = styled(Image)`
  width: 70%;
`;

export const Drugheader = styled(View)`
  width: 100%;
  flex-direction: column;
`;

export const ItemName = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const ItemSize = styled(Text)`
  color: #221F1F99;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.info};
`;

export const ItemRateWrap = styled(View)`
  flex-direction: row;
  gap: ${(props) => props.theme.space[2]};
`;

export const ItemRateTag = styled(Text)`
  color: #407CE2;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.placeholder};
`;

export const CartPriceWrap = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuantitySelector = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 30%;
  justify-content: space-between;
`;

export const PlusWrapper = styled(TouchableOpacity)`
  background-color: #1A1F71;
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
`;

export const ItemPriceTag = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

export const DetailFooter = styled(View)`
  widht: 100%;
  flex-direction: column;
`;

export const DetailText = styled(Text)`
  color: #221F1F99;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.placeholder};
`;

export const BtnWrap = styled(View)`
  width: 100%;
  margin-top: ${(props) => props.theme.space[4]};
`;

// CART STYLES
export const CartWrapper = styled(View)`
  width: 100%;
`;

export const CartItems = styled(View)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CartItemBox = styled(View)`
  width: 100%;
  background-color: white;
  flex-direction: row;
  border: 1px solid #407CE221;
  border-radius: 11px;
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  align-items: center;
  justify-content: space-between;
`;

export const CartImg = styled(Image)`
  width: 20%;
`;

export const CartDetailWrap = styled(View)`
  width: 70%;
  flex-direction: column;
`;

export const CartItemDetails = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const CartDescription = styled(View)`
  align-self: start;
`;

export const CartQtyWrap = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QtySelector = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 45%;
  justify-content: space-between;
`;

export const PlusWrap = styled(TouchableOpacity)`
  background-color: #1A1F71;
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
`;

export const CartItemPrice = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.h6};
`;

export const CartPaymentWrapper = styled(View)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.space[2]};
  border-bottom-width: 1px;
  border-bottom-color: #407CE221;
`;

export const PayTextHead = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const PayItems = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PayTexts = styled(Text)`
  color: #221F1F99;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const TotalText = styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const CartFooter = styled(View)`
  widht: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SummaryWrap = styled(View)``;