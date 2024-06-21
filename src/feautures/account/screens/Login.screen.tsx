import { useState } from "react";
import { View } from "react-native";
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Spacer position="top" size="medium">
        <CenteredText variant='main'>Sign In</CenteredText>
      </Spacer>
      <Spacer position="top" size="extraLarge" />
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
        label='Enter your password'
        value={password}
        textContentType='password'
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(e) => setPassword(e)}
      />
      <Spacer position="top" size="medium">
        <RighText variant='label'>Forgot password?</RighText>
      </Spacer>
      {/* {error &&{<Spacer position="top" size="XXL" >
        <CenteredText variant='error'>hello</CenteredText>
      </Spacer>} } */}
      <Spacer position="top" size='extraLarge'>
        <LogBtn>Sign In</LogBtn>
      </Spacer>
      <Spacer position="top" size="medium">
        <CenteredText variant='place' onPress={() => navigation.navigate('Sign Up')} >Don't have an account? <BluText>Signup</BluText></CenteredText>
      </Spacer>
    </Container>
  );
}
 
export default Login;