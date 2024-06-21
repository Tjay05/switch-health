import { useState } from "react";
import { ScrollView, View } from "react-native";
import { styled } from "styled-components";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import { IconContainer, InputContainer, InputField, LogBtn } from "../components/account.styles";

const Container = styled(View)`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

const BluText = styled(Text)`
  color: ${(props) => props.theme.Colors.bg.dark};
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');  
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <Container>
        <Spacer position="top" size="medium">
          <CenteredText variant='main'>Sign Up</CenteredText>
        </Spacer>
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <Feather name="user" size={20} color='#757575'/>
          </IconContainer>
          <InputField
            placeholder='Enter your name'
            placeholderTextColor='#757575'
            value={name}
            textContentType='name'
            keyboardType='default'
            autoCapitalize="none"
            onChangeText={(e) => setName(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <Ionicons name="mail-outline" size={20} color='#757575'/>
          </IconContainer>
          <InputField
            placeholder='Enter your email'
            placeholderTextColor='#757575'
            value={email}
            textContentType='emailAddress'
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <Feather name='phone' size={20} color='#757575'/>
          </IconContainer>
          <InputField
            placeholder='Enter your phone number'
            placeholderTextColor='#757575'
            value={number}
            textContentType='telephoneNumber'
            keyboardType='number-pad'
            onChangeText={(e) => setNumber(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <SimpleLineIcons name="lock" size={20} color='#757575' />
          </IconContainer>
          <InputField
            placeholder='Enter your password'
            placeholderTextColor='#757575'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(e) => setPassword(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <Text variant='place'>I agree to the healthcare <BluText>Terms of Service</BluText> and <BluText>Privacy Policy</BluText></Text>
        {/* {error &&{<Spacer position="top" size="XXL" >
          <CenteredText variant='error'>hello</CenteredText>
        </Spacer>} } */}
        <Spacer position="top" size='extraLarge'>
          <LogBtn onPress={() => navigation.navigate('Otp')}>Sign Up</LogBtn>
        </Spacer>
        <Spacer position="top" size="medium">
          <CenteredText variant='place' onPress={() => navigation.navigate('Login')} >Already have an account? <BluText>Signin</BluText></CenteredText>
        </Spacer>
        <Spacer position="bottom" size='large' />
      </Container>
    </ScrollView>
  );
}
 
export default SignUp;