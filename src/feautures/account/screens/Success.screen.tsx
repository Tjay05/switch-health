import SuccSVG from '@/assets/icons/SuccSVG';
import Spacer from '@/src/components/spacer/Spacer.component';
import Text from '@/src/components/typograpghy/Text.component';
import { Image, View, Button } from 'react-native';
import { styled } from 'styled-components';

import successImg from '../../../../assets/images/success.png';

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


const SuccessPage = ({ navigation }) => {
  return (
    <>
      <Container>
        <Spacer position='bottom' size='large'>
          <SuccSVG/>
          {/* <WelImg source={successImg} /> */}
        </Spacer>
        <Spacer position='bottom' size='extraLarge' >
          <Text variant='caption' >Success!</Text>
        </Spacer>
        <Spacer position='bottom' size='XXL' >
          <Text variant='shade'>Congratulations! You have been successfully authenticated</Text>
        </Spacer>
        <Spacer position='top' size='large' >
          <Button title='Continue'/>
        </Spacer>
      </Container>
    </>
  );
}
 
export default SuccessPage;