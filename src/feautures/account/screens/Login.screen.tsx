import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import { 
  IconContainer, 
  InputContainer,
  InputField,
  LogBtn, 
  ORstyles as styles
} from "../components/account.styles";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
  font-size: ${(props) => props.theme.fontSizes.placeholder};
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('wrong password');

  return (
    <ScrollView>
      <Container>
        <Spacer position="top" size="large">
          <CenteredText variant='main'>Sign In</CenteredText>
        </Spacer>
        <Spacer position="top" size="extraLarge" />
        <Spacer position="top" size="large" />
        <InputContainer>
          <IconContainer>
            <Ionicons name="mail-outline" size={25} color='#757575'/>
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
        <Spacer position="top" size="extraLarge" />
        <InputContainer>
          <IconContainer>
            <SimpleLineIcons name="lock" size={25} color='#757575' />
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
        <Spacer position="top" size="large">
          <RighText variant='label' onPress={() => navigation.navigate("Forgot Password")}>Forgot password?</RighText>
        </Spacer>
        {/* ERROR */}
        {error && <Spacer position="top" size="extraLarge" >
          <CenteredText variant='error'>{error}</CenteredText>
        </Spacer>} 
        <Spacer position="top" size='large'>
          <LogBtn 
            labelStyle={styles.buttonText} 
            contentStyle={styles.buttonContent}
          >
            Sign In
          </LogBtn>
        </Spacer>

        <Spacer position="top" size="medium">
          <CenteredText variant='place' onPress={() => navigation.navigate('Sign Up')} >Don't have an account? <BluText>Signup</BluText></CenteredText>
        </Spacer>

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.googleBtn}>
          <AntDesign style={styles.icon} name="google" size={24} />
          <Text variant="place" style={styles.btnText}>Sign in with Google</Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
}
 
export default Login;