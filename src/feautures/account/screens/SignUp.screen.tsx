import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styled } from "styled-components/native";
import {
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import {
  IconContainer,
  InputContainer,
  InputField,
  LogBtn,
  ORstyles as styles,
} from "../components/account.styles";
import Loading from "@/src/components/loader";

const Container = styled(View)`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BluText = styled(Text)`
  color: ${(props) => props.theme.Colors.bg.dark};
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetData = async (data) => {
    try {
      await AsyncStorage.setItem("tokenData", JSON.stringify(data));
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  const handleSubmit = async () => {
    if (!isChecked) {
      setError("You must agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    const userData = {
      fullName: name,
      email,
      phone: `+234${phone}`,
      password,
    };

    try {
      const response = await fetch(
        "https://switch-health.onrender.com/patient/create-patient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        handleSetData(userData);
        navigation.navigate("Otp");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <Container>
        <Spacer position="top" size="large">
          <CenteredText variant="main">Sign Up</CenteredText>
        </Spacer>
        <Spacer position="top" size="extraLarge" />
        {isLoading && <Loading />}
        <InputContainer>
          <IconContainer>
            <Feather name="user" size={24} color="#757575" />
          </IconContainer>
          <InputField
            placeholder="Enter your name"
            placeholderTextColor="#757575"
            value={name}
            textContentType="name"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(e) => setName(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <Spacer position="top" size="small" />
        <InputContainer>
          <IconContainer>
            <Ionicons name="mail-outline" size={24} color="#757575" />
          </IconContainer>
          <InputField
            placeholder="Enter your email"
            placeholderTextColor="#757575"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <Spacer position="top" size="small" />
        <InputContainer>
          <IconContainer>
            <Feather name="phone" size={24} color="#757575" />
          </IconContainer>
          <InputField
            placeholder="Enter your phone number"
            placeholderTextColor="#757575"
            value={phone}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            onChangeText={(e) => setPhone(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <Spacer position="top" size="small" />
        <InputContainer>
          <IconContainer>
            <SimpleLineIcons name="lock" size={24} color="#757575" />
          </IconContainer>
          <InputField
            placeholder="Enter your password"
            placeholderTextColor="#757575"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(e) => setPassword(e)}
          />
        </InputContainer>
        <Spacer position="top" size="large" />
        <Spacer position="top" size="small" />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            color="#6200ee"
          />
          <Text style={styles.checkboxLabel} variant="place">
            I agree to the healthcare <BluText>Terms of Service</BluText> and{" "}
            <BluText>Privacy Policy</BluText>
          </Text>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>

        {/* <TouchableOpacity style={styles.googleBtn}>
          <AntDesign style={styles.icon} name="google" size={24} />
          <Text variant="place" style={styles.btnText}>
            Sign in with Google
          </Text>
        </TouchableOpacity> */}

        {error && (
          <Spacer position="top" size="extraLarge">
            <CenteredText variant="error">{error}</CenteredText>
          </Spacer>
        )}

        <Spacer position="top" size="large">
          <LogBtn
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </LogBtn>
        </Spacer>
        <Spacer position="top" size="medium">
          <CenteredText
            variant="place"
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? <BluText>Signin</BluText>
          </CenteredText>
        </Spacer>
        <Spacer position="bottom" size="large" />
      </Container>
    </ScrollView>
  );
};

export default SignUp;
