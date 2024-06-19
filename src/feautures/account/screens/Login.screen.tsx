import { useState } from "react";
import { Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text>Sign In</Text>
      <TextInput
        label='Enter your email'
        value={email}
        textContentType='emailAddress'
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        label='ENter your password'
        value={password}
        textContentType='password'
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(e) => setPassword(e)}
      />
      <Text>Forgot password?</Text>
      {/* <Text>{error}</Text> */}
      <Button>Sign In</Button>
      <Text>Don't have an account? Signup</Text>
    </>
  );
}
 
export default Login;