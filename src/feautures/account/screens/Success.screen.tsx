import SuccSVG from '@/assets/icons/SuccSVG';
import Spacer from '@/src/components/spacer/Spacer.component';
import Text from '@/src/components/typograpghy/Text.component';
import { CommonActions } from '@react-navigation/native';
import { View } from 'react-native';
import { styled } from 'styled-components';

import { LogBtn } from '../components/account.styles';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const SuccessPage = ({ navigation }) => {
  return (
    <>
      <Container>
        <Spacer position='bottom' size='large'>
          <SuccSVG/>
        </Spacer>
        <Spacer position='bottom' size='extraLarge' >
          <Text variant='caption' >Success!</Text>
        </Spacer>
        <Spacer position='bottom' size='XXL' >
          <Text variant='shade'>Congratulations! You have been successfully authenticated</Text>
        </Spacer>
        <Spacer position='top' size='large' >
          <LogBtn onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'AppNavigator' }],
            })
          )} >
            Continue
          </LogBtn>
        </Spacer>
      </Container>
    </>
  );
}
 
export default SuccessPage;