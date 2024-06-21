import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { styled } from 'styled-components';

import Text from "@/src/components/typograpghy/Text.component";
import Spacer from '@/src/components/spacer/Spacer.component';

// Pic Imports
import ForgotImg from '../../../../assets/images/forgotPword.png';
import { IconContainer, InputContainer, InputField, LogBtn } from "../components/account.styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const HeadingContainer = styled(View)`
  width: 55%;
  align-self: flex-start;
  font-weight: 700;
`;

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <Container>
        <Spacer position="bottom" size="XXL">
          <Image source={ForgotImg} />
        </Spacer>
        <HeadingContainer>
          <Text variant='caption'>Forgot Password?</Text>
        </HeadingContainer>
        <Spacer position="bottom" size="medium"/>
        <Spacer position="bottom" size="large">
          <Text variant='hint'>Don’t worry! It happens. Please enter your email address, so we will send the OTP</Text>
        </Spacer>
        <InputContainer>
          <IconContainer>
            <Ionicons name="mail-outline" size={20} color='#757575'/>
          </IconContainer>
          <InputField
            placeholder='Enter your email'
            placeholderTextColor='#757575'
            value={email}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <SimpleLineIcons name="lock" size={20} color='#757575' />
          </IconContainer>
          <InputField
            placeholder='Enter your new password'
            placeholderTextColor={'#757575'}
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(e) => setPassword(e)}
          />
        </InputContainer>
        <Spacer position="top" size="medium"/>
        {/* {error && <Spacer position="top" size="medium" >
          <Text variant='error'>hello</Text>
        </Spacer>}  */}
        <Spacer position="bottom" size="large">
          <LogBtn onPress={() => navigation.navigate('Success')}>Continue</LogBtn> 
        </Spacer>
      </Container>
    </ScrollView>
  );
}
 
export default ForgotPassword;