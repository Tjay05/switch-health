import { Image, View } from 'react-native';
import { styled } from 'styled-components';

import welcomeImg from '../../assets/images/welcome.png';
import Spacer from '../components/spacer/Spacer.component';
import Text from '../components/typograpghy/Text.component';
import { LogBtn, ORstyles as styles } from '../feautures/account/components/account.styles';

const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const WelImg = styled(Image)`
  height: 245px;
  width: 245px;
`;

const HeadingContainer = styled(View)`
  width: 100%;
  align-self: stretch;
  font-weight: 700;
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
      <HeadingContainer>
        <LogBtn 
          labelStyle={styles.buttonText} 
          contentStyle={styles.buttonContent} 
          onPress={() => navigation.navigate('Onboarding')} 
        >
          Continue
        </LogBtn>
      </HeadingContainer>
    </Container>
  );
}
 
export default Welcome;