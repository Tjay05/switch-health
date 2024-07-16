import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import Text from "@/src/components/typograpghy/Text.component";
import Spacer from "@/src/components/spacer/Spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OtpImg from "../../../../assets/images/otpPic.png";
import { LogBtn, ORstyles as styles } from "../components/account.styles";
import OtpSVG from "@/assets/icons/OtpSVG";

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const EText = styled(Text)`
  color: black;
  font-weight: 600;
`;

const BluText = styled(Text)`
  color: ${(props) => props.theme.Colors.bg.dark};
`;

const BluTimerText = styled(Text)`
  color: #407bff;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const OtpInput = styled(TextInput)`
  border: 1px solid ${(props) => (props.isFocused ? "#0000FF" : "#000")};
  border-radius: 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 8px;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.interBold};
`;

const OtpContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const OTPage = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState([false, false, false, false]);
  const otpRefs = useRef([]);
  const [emailData, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [remainingTime, setRemainingTime] = useState(7 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )} Secs`;
  };

  useEffect(() => {
    getEmailFromStorage();
  }, []);

  const getEmailFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData !== null) {
        const emailData = JSON.parse(storedData);
        setEmail(emailData.email);
      }
    } catch (error) {
      console.log("Error retrieving email from AsyncStorage:", error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://switch-health.onrender.com/patient/verify-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            OTP: otp.join(""),
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem("data", JSON.stringify(data));
        navigation.navigate("Success");
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

  const handleOtpChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (index) => {
    const newFocus = [...isFocused];
    newFocus[index] = true;
    setIsFocused(newFocus);
  };

  const handleBlur = (index) => {
    const newFocus = [...isFocused];
    newFocus[index] = false;
    setIsFocused(newFocus);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      const newOtp = [...otp];
      if (index > 0) {
        if (otp[index] === "") {
          otpRefs.current[index - 1].focus();
          newOtp[index - 1] = "";
        } else {
          newOtp[index] = "";
        }
        setOtp(newOtp);
      }
    }
  };

  const handleResend = async () => {
    try {
      const storedData = await AsyncStorage.getItem("tokenData");
      if (storedData !== null) {
        const userData = JSON.parse(storedData);
        const response = await fetch(
          "https://switch-health.onrender.com/patient/new-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: userData.phone,
            }),
          }
        );
        const data = await response.json();
        setRemainingTime(7 * 60);
        setOtp(["", "", "", ""]);
        otpRefs.current[0].focus();
        Alert.alert("A new otp has been sent");
        if (!response.ok) {
          setError(data.message);
        }
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <ScrollView>
      <Container>
        <Spacer position="bottom" size="large">
          <Spacer position="top" size="large">
            <OtpSVG />
          </Spacer>
        </Spacer>
        <Spacer position="bottom" size="medium">
          <Text variant="caption">OTP VERIFICATION</Text>
        </Spacer>
        <Spacer position="bottom" size="large">
          <Text variant="hint">
            Enter the OTP sent to <EText>{emailData}</EText>
          </Text>
          <BluTimerText>{formatTime(remainingTime)}</BluTimerText>
        </Spacer>
        <Spacer position="bottom" size="XXL">
          <OtpContainer>
            {otp.map((digit, index) => (
              <OtpInput
                key={index}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => (otpRefs.current[index] = ref)}
                isFocused={isFocused[index]}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </OtpContainer>
        </Spacer>
        <Text variant="place">
          Didn’t receive code? <BluText onPress={handleResend}>Re-send</BluText>
        </Text>
        {error && (
          <Spacer position="top" size="medium">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer position="bottom" size="large">
          <LogBtn
            labelStyle={styles.buttonText}
            contentStyle={styles.buttonContent}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </LogBtn>
        </Spacer>
      </Container>
    </ScrollView>
  );
};

export default OTPage;
