import { Image, ScrollView, TextInput, View } from "react-native";
import { styled } from 'styled-components';
import { Button } from "react-native-paper";

import Text from "@/src/components/typograpghy/Text.component";
import Spacer from '@/src/components/spacer/Spacer.component';

// Pic Imports
import OtpImg from '../../../../assets/images/otpPic.png';
import { useRef, useState } from "react";

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
  font-weight: 600
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

const BluText = styled(Text)`
  color: ${(props) => props.theme.Colors.bg.dark};
`;

const OtpInput = styled(TextInput)`
  border: 1px solid #000;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 8px;
  font-size: 18px;
  font-family: ${(props => props.theme.fonts.interBold)}
`;

const OtpContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const OTPage = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = useRef([]);

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

  return (
    <ScrollView>
      <Container>
        <Spacer position="bottom" size="XXL">
          <Image source={OtpImg} />
        </Spacer>
        <Spacer position="bottom" size="medium">
          <Text variant='caption'>OTP VERIFICATION</Text>
        </Spacer>
        <Spacer position="bottom" size="large">
          <Text variant='hint'>Enter the OTP sent to <EText>tosinpoppins@gmail.com</EText></Text>
        </Spacer>
        {/* OTP BOXES */}
        <Spacer position="bottom" size="XXL">
          <OtpContainer>
            {otp.map((digit, index) => (
              <OtpInput
                key={index}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                keyboardType='numeric'
                maxLength={1}
                ref={(ref) => otpRefs.current[index] = ref}
              />
            ))}
          </OtpContainer>
        </Spacer>
        <Text variant='place'>Didn’t receive code? <BluText>Re-send</BluText></Text>
        {/* {error && <Spacer position="top" size="medium" >
          <Text variant='error'>hello</Text>
        </Spacer>}  */}
        <Spacer position="bottom" size="large">
          <LogBtn onPress={() => navigation.navigate('Success')}>Submit</LogBtn> 
        </Spacer>
      </Container>
    </ScrollView>
  );
}
 
export default OTPage;