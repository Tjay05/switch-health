import { View, Text, Button, Image } from "react-native";
import { styled } from "styled-components";

import Logo from '../../../../assets/icons/logo.png';

const Head = styled(Text)`
  color: ${(props) => props.theme.Colors.brand.tetiary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.poppinsBold};
`;

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={Logo} />
      <Head>Switch Health</Head>
      <Text>Let's get started!</Text>
      <Text>Login to stay healthy and fit</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
}
 
export default AccountScreen;