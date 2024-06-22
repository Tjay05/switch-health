import { Image, View } from 'react-native';
import { styled } from 'styled-components';

import welcomeImg from '../../assets/images/welcome.png';
import Spacer from '../components/spacer/Spacer.component';
import Text from '../components/typograpghy/Text.component';
import { LogBtn, ORstyles as styles } from '../feautures/account/components/account.styles';
import { useEffect, useState } from 'react';

const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const WelImg = styled(Image)`
  height: 245px;
  width: 245px;
  margin-top:100px;
`;

const HeadingContainer = styled(View)`
  width: 80%;
  align-self: stretch;
  font-weight: 700;
  margin:auto;
`;

const Welcome = ({ navigation }) => {
  const [remainingTime, setRemainingTime] = useState( 7*60 ); // Initial time in seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          // Handle timer expiry here (e.g., show a message, disable submit button)
          return 0; // Or any other action you want to perform on expiry
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
    )}`;
  };
  return (
    <Container>
      <Spacer position="bottom" size="large">
        <WelImg source={welcomeImg} />
      </Spacer>
      <Spacer position="bottom" size="extraLarge">
        <Text variant="caption">Welcome to Switch Health</Text>
      </Spacer>
      <Text variant="shade">{formatTime(remainingTime)}</Text>
      <Spacer position="bottom" size="XXL">
        <Text variant="shade">
          Welcome to Switch Health! We're thrilled to have you on board. Let's
          unlock a healthier you together.
        </Text>
      </Spacer>
      <HeadingContainer>
        <LogBtn
          labelStyle={styles.buttonText}
          contentStyle={styles.buttonContent}
          onPress={() => navigation.navigate("Onboarding")}
        >
          Continue
        </LogBtn>
      </HeadingContainer>
    </Container>
  );
}
 
export default Welcome;