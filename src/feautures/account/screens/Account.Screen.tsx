import { View, Text, Button, Image } from "react-native";

import Logo from '../../assets/icons/logo.png';

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={Logo} />
      <Text>Switch Health</Text>
      <Text>Let's get started!</Text>
      <Text>Login to stay healthy and fit</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
}
 
export default AccountScreen;