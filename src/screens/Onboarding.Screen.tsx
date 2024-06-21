import Swiper from 'react-native-swiper';
import { Image, View, Button } from 'react-native';

import Text from '../components/typograpghy/Text.component';

// Pic Imports
import FindSpecImg from '../../assets/images/findSpecialist.png';
import getAdviceImg from '../../assets/images/getAdvice.png';
import { styled } from 'styled-components';
import Spacer from '../components/spacer/Spacer.component';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Info = styled(Text)`
  align-self: flex-start;
`;

const OnboardScreen = ({ navigation }) => {
  return (
    <Swiper showsButtons={false}>
      <Container>
        <Spacer position='bottom' size='small'>
          <Image source={FindSpecImg} />
        </Spacer>
        <Spacer position='top' size='medium'/>
        <Info variant='main' >Find a lot of specialist doctors in one place</Info>
      </Container>
      <Container>
        <Spacer position='bottom' size='XXL'>
          <Image source={getAdviceImg} />
        </Spacer>
        <Spacer position='bottom' size='XXL'/>
        <Spacer position='bottom' size='extraLarge'/>
        <Info variant='main' >Get advice only from a doctor you believe in.</Info>        
        <Spacer position='top' size='extraLarge'>
          <Button title='Start' onPress={() => navigation.navigate('Main')} />
        </Spacer>
      </Container>
    </Swiper>
  );
};
 
export default OnboardScreen;