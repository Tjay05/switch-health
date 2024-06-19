import Swiper from 'react-native-swiper';
import { Image, Text, View, Button } from 'react-native';

import FindSpecImg from '../../assets/images/findSpecialist.png';
import getAdviceImg from '../../assets/images/getAdvice.png';

const OnboardScreen = ({ navigation }) => {
  return (
    <Swiper showsButtons={true}>
      <View>
        <Image source={FindSpecImg} />
        <Text>Find a lot of specialist doctors in one place</Text>
      </View>
      <View>
        <Image source={getAdviceImg} />
        <Text>Get advice only from a doctor you believe in.</Text>
        <Button title='Start' onPress={() => navigation.navigate('Main')} />
      </View>
    </Swiper>
  );
};
 
export default OnboardScreen;