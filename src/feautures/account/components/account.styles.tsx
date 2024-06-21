import { Button } from "react-native-paper";
import { TextInput, View } from "react-native";
import { styled } from "styled-components";

export const InputField = styled(TextInput)`
  width: 100%;
  height: 50px;
  border: 1px solid #221F1F1A;
  background: #F9FAFB; 
  border-radius: 6px;
  padding-left: 40px;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #757575;
  font-size: ${(props) => props.theme.fontSizes.placeholder};
`;

export const LogBtn = styled(Button).attrs((props) => ({
  color: 'white',
  mode: 'contained',
  contentStyle: {
    backgroundColor: props.theme.Colors.bg.dark,
    width: '100%',
  },
}))`
  margin-top: 8px;
  font-size: 300px;
`;

export const InputContainer = styled(View)`
  position: relative;
  width: 100%;
`;
export const IconContainer = styled(View)`
  position: absolute;
  z-index: 444;
  top: 28%;
  left: 10px;
`;