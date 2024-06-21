import { View, Image } from "react-native";
import { styled } from "styled-components";
import { Button } from "react-native-paper";
import Text from "@/src/components/typograpghy/Text.component";

import Logo from '../../../../assets/icons/logo.png';
import Spacer from "@/src/components/spacer/Spacer.component";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const LogBtn = styled(Button).attrs((props) => ({
  color: 'white',
  mode: 'contained',
  contentStyle: {
    backgroundColor: props.theme.Colors.bg.dark,
  },
}))`
  margin-top: 8px;
`;

const SignBtn = styled(Button).attrs((props) => ({
  color: `${props.theme.Colors.bg.dark}`,
  mode: "elevated",
  contentStyle: {
    backgroundColor: props.theme.Colors.bg.primary,
    borderColor: props.theme.Colors.bg.dark,
  },
}))`
  margin-top: 8px;
`;

const AccountScreen = ({ navigation }) => {
  return (
    <Container>
      <Image source={Logo} />
      <Spacer position="bottom" size="extraLarge">
        <Text variant='head'>Switch Health</Text>
      </Spacer>
      <Text variant='caption'>Let's get started!</Text>
      <Spacer position="top" size="small">
        <Text variant='shade'>Login to stay healthy and fit</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <LogBtn onPress={() => navigation.navigate('Login')}>
          Login
        </LogBtn>
        <SignBtn onPress={() => navigation.navigate('Sign Up')}>
          Sign Up
        </SignBtn>
      </Spacer>
    </Container>
  );
}
 
export default AccountScreen;