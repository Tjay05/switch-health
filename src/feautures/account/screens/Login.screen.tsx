import { useState } from "react";
import { View, ScrollView } from "react-native";
import { styled } from "styled-components";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import {
  IconContainer,
  InputContainer,
  InputField,
  LogBtn,
  ORstyles as styles,
} from "../components/account.styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import Loading from "@/src/components/loader";
import { CommonActions } from "@react-navigation/native";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSetData = async (data) => {
    try {
      await AsyncStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://switch-health.onrender.com/patient/sign-in",
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
        handleSetData(data);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'AppNavigator' }],
          })
        );
        // console.error(data);
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
    <>
      {isLoading && <Loading />}
      <ScrollView>
        <Container>
          <Spacer position="top" size="large">
            <CenteredText variant="main">Sign In</CenteredText>
          </Spacer>
          <Spacer position="top" size="extraLarge" />
          <Spacer position="top" size="large" />
          <InputContainer>
            <IconContainer>
              <Ionicons name="mail-outline" size={25} color="#757575" />
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
          <Spacer position="top" size="extraLarge" />
          <InputContainer>
            <IconContainer>
              <SimpleLineIcons name="lock" size={25} color="#757575" />
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
          <Spacer position="top" size="large">
            <RighText
              variant="label"
              onPress={() => navigation.navigate("Forgot Password")}
            >
              Forgot password?
            </RighText>
          </Spacer>
          {/* ERROR */}
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
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </LogBtn>
          </Spacer>

          <Spacer position="top" size="medium">
            <CenteredText
              variant="place"
              onPress={() => navigation.navigate("Sign Up")}
            >
              Don't have an account? <BluText>Signup</BluText>
            </CenteredText>
          </Spacer>

          {/* <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity style={styles.googleBtn}>
            <AntDesign style={styles.icon} name="google" size={24} />
            <Text variant="place" style={styles.btnText}>
              Sign in with Google
            </Text>
          </TouchableOpacity> */}
        </Container>
      </ScrollView>
    </>
  );
};

export default Login;
