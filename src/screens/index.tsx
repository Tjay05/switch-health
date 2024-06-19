import { Image, Text, View, Button } from 'react-native';

import welcomeImg from '../../assets/images/welcome.png';

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Image source={welcomeImg} />
      <Text>Welcome to Switch Health</Text>
      <Text>Welcome to Switch Health! We're thrilled to have you on board. Let's unlock a healthier you together.</Text>
      <Button title='Continue' onPress={() => navigation.navigate('Onboarding')} />
    </View>
  );
}
 
export default Welcome;