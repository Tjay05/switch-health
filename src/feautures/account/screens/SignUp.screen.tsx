import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styled } from "styled-components";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";

const Container = styled(View)`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

const BluText = styled(Text)`
  color: ${(props) => props.theme.Colors.bg.dark};
`;

const RighText = styled(Text)`
  text-align: right;
  color: ${(props) => props.theme.Colors.bg.dark};
  font-size: ${(props) => props.theme.fontSizes.min};
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const LogBtn = styled(Button).attrs((props) => ({
  color: 'white',
  mode: 'contained',
  contentStyle: {
    backgroundColor: props.theme.Colors.bg.dark,
  },
}))`
  margin-top: 8px;
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
        <TextInput
          label='Enter your name'
          value={name}
          textContentType='name'
          keyboardType='default'
          autoCapitalize="none"
          onChangeText={(e) => setName(e)}
        />
        <Spacer position="top" size="large" />
        <TextInput
          label='Enter your email'
          value={email}
          textContentType='emailAddress'
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer position="top" size="large" />
        <TextInput
          label='Enter your phone number'
          value={number}
          textContentType='telephoneNumber'
          keyboardType='number-pad'
          onChangeText={(e) => setNumber(e)}
        />
        <Spacer position="top" size="large" />
        <TextInput
          label='Enter your password'
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(e) => setPassword(e)}
        />
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