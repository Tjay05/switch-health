import { Image, View, Button } from 'react-native';
import { styled } from 'styled-components';

import welcomeImg from '../../assets/images/welcome.png';
import Spacer from '../components/spacer/Spacer.component';
import Text from '../components/typograpghy/Text.component';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const WelImg = styled(Image)`
  height: 245px;
  width: 245px;
`;

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Spacer position='bottom' size='large'>
        <WelImg source={welcomeImg} />
      </Spacer>
      <Spacer position='bottom' size='extraLarge' >
        <Text variant='caption' >Welcome to Switch Health</Text>
      </Spacer>
      <Spacer position='bottom' size='XXL' >
        <Text variant='shade'>Welcome to Switch Health! We're thrilled to have you on board. Let's unlock a healthier you together.</Text>
      </Spacer>
      <Spacer position='top' size='large' >
        <Button title='Continue' onPress={() => navigation.navigate('Onboarding')} />
      </Spacer>
    </Container>
  );
}
 
export default Welcome;