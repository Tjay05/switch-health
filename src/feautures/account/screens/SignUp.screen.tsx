import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";
import { AntDesign, Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import { 
  IconContainer, 
  InputContainer, 
  InputField, 
  LogBtn, 
  ORstyles as styles 
} from "../components/account.styles";
import { Checkbox } from "react-native-paper";

const Container = styled(View)`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  justify-content: center;
  align-tem: center;
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
  const [error, setError] = useState('wrong password');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView>
      <Container>
        <Spacer position="top" size="large">
          <CenteredText variant='main'>Sign Up</CenteredText>
        </Spacer>
        <Spacer position="top" size="extraLarge" />
        <InputContainer>
          <IconContainer>
            <Feather name="user" size={24} color='#757575'/>
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
        <Spacer position="top" size='small'/>
        <InputContainer>
          <IconContainer>
            <Ionicons name="mail-outline" size={24} color='#757575'/>
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
        <Spacer position="top" size='small'/>
        <InputContainer>
          <IconContainer>
            <Feather name='phone' size={24} color='#757575'/>
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
        <Spacer position="top" size='small'/>
        <InputContainer>
          <IconContainer>
            <SimpleLineIcons name="lock" size={24} color='#757575' />
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
        <Spacer position="top" size='small'/>
        <View style={styles.checkboxContainer}>
          <Checkbox 
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
            color='#6200ee'
          />
          <Text style={styles.checkboxLabel} variant='place'>I agree to the healthcare <BluText>Terms of Service</BluText> and <BluText>Privacy Policy</BluText></Text>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.googleBtn}>
          <AntDesign style={styles.icon} name="google" size={24} />
          <Text variant="place" style={styles.btnText}>Sign in with Google</Text>
        </TouchableOpacity>

        {error && (
          <Spacer position="top" size="extraLarge" >
          <CenteredText variant='error'>{error}</CenteredText>
        </Spacer>) }

        <Spacer position="top" size='large'>
          <LogBtn 
            labelStyle={styles.buttonText} 
            contentStyle={styles.buttonContent} 
            onPress={() => navigation.navigate('Otp')}
          >
            Sign Up
          </LogBtn>
        </Spacer>
        <Spacer position="top" size="medium">
          <CenteredText variant='place' onPress={() => navigation.navigate('Login')} >Already have an account? <BluText >Signin</BluText></CenteredText>
        </Spacer>
        <Spacer position="bottom" size='large' />
      </Container>
    </ScrollView>
  );
}
 
export default SignUp;