import { useState } from "react";
import { Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  const [name, setName] = useState('');  
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text>Sign Up</Text>
      <TextInput
        label='Enter your name'
        value={name}
        textContentType='name'
        keyboardType='default'
        autoCapitalize="none"
        onChangeText={(e) => setName(e)}
      />
      <TextInput
        label='Enter your email'
        value={email}
        textContentType='emailAddress'
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        label='Enter your phone number'
        value={number}
        textContentType='telephoneNumber'
        keyboardType='number-pad'
        onChangeText={(e) => setNumber(e)}
      />
      <TextInput
        label='Enter your password'
        value={password}
        textContentType='password'
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(e) => setPassword(e)}
      />
      <Text>i agree to terms and conditions</Text>
      {/* <Text>{error}</Text> */}
      <Button>Sign Up</Button>
      <Text>Already have an account? Signin</Text>
    </>
  );
}
 
export default SignUp;