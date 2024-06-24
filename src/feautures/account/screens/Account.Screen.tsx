import { View, Image } from "react-native";
import { styled } from "styled-components";
import { Button } from "react-native-paper";
import Text from "@/src/components/typograpghy/Text.component";

import Spacer from "@/src/components/spacer/Spacer.component";
import { LogBtn, ORstyles as styles } from "../components/account.styles";
import LogoSVG from "@/assets/icons/LogoSVG";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const SignBtn = styled(Button).attrs((props) => ({
  color: `${props.theme.Colors.bg.dark}`,
  mode: "outlined",
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
      <LogoSVG/>
      <Spacer position="bottom" size="extraLarge">
        <Text variant='head'>Switch Health</Text>
      </Spacer>
      <Text variant='caption'>Let's get started!</Text>
      <Spacer position="top" size="small">
        <Text variant='shade'>Login to stay healthy and fit</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <LogBtn 
          labelStyle={styles.buttonText} 
          contentStyle={styles.buttonContent} 
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </LogBtn>
        <SignBtn 
          labelStyle={{color: '#1A1F71', fontSize: 18, paddingVertical: 5}} 
          contentStyle={styles.buttonContent} 
          onPress={() => navigation.navigate('Sign Up')}
        >
          Sign Up
        </SignBtn>
      </Spacer>
    </Container>
  );
}
 
export default AccountScreen;