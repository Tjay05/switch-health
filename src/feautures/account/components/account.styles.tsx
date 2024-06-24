import { Button } from "react-native-paper";
import { StyleSheet, TextInput, View } from "react-native";
import { styled } from "styled-components";

export const InputField = styled(TextInput)`
  width: 100%;
  height: 60px;
  border: 1px solid #221F1F1A;
  background: #F9FAFB; 
  border-radius: 6px;
  padding-left: 45px;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  color: #757575;
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const LogBtn = styled(Button).attrs((props) => ({
  mode: 'contained',
  contentStyle: {
    backgroundColor: props.theme.Colors.bg.dark,
    width: '100%',
  },
}))`
  margin-vertical: 30px;
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

export const ORstyles = StyleSheet.create({
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#888',
  },
  googleBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center'
  },
  icon: {
    marginRight: 10,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 600
  },
  buttonContent: {
    marginHorizontal: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    // alignItems: 'center',
    width: '91%'
  },
  checkboxLabel: {
    fontSize: 16
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 5,
    // font-family: 'Poppins_400Regular',
  },
})