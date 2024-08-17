import Text from "@/src/components/typograpghy/Text.component";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { styled } from "styled-components";

export const DocNearContainer = styled(View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 4;
`;

export const DocsNearBox = styled(View)`
  padding-vertical: ${(props)=> props.theme.space[2]};
  background-color: #fff;
  margin-horizontal: auto;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`;

export const BookBtnWrap = styled(TouchableOpacity)`
  width: 75%;
  margin-horizontal: auto;
`;

export const BookAppWrap = styled(View)`
  flex:1;
  background-color: #fff;
`;

export const SpecialistContainer = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const SpecialistScroll = styled(ScrollView)`
  width: 90%;
  margin-horizontal: auto;
  margin-vertical: ${(props)=> props.theme.space[3]};
  flex: 1;
`;

export const SpecialistGroup = styled(View)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-horizontal: auto;
  margin-vertical: ${(props) => props.theme.space[3]};
`;

export const SpecialistBox = styled(TouchableOpacity)`
  border-radius: 9px;
  background-color: #F6F7F9;
  width: 30%;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[3]};
  border-bottom-color: #0000000D;
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[3]};
`;

export const TextCaption = styled(Text)`
  font-size: 14px;
  color: #999999;
  font-family: ${(props) => props.theme.fonts.interRegular};
`;

export const SpecialistType = styled(Text)`
  font-size: 12px;
  color: #707070;
  font-family: ${(props) => props.theme.fonts.interRegular};
  margin-top: ${(props) => props.theme.space[3]};
  text-align: center;
  flex-wrap: wrap;
`;