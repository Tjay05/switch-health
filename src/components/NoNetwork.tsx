import NoConSVG from "@/assets/icons/NoConnectSVG";
import { TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";
import { NoAppWrapper } from "../feautures/appointment/components/Appointment.styles";
import Spacer from "./spacer/Spacer.component";
import Text from "./typograpghy/Text.component";

const BadGateWay = ({ handleRefresh }) => {
  return (
    <BadGateContainer>
      <NoAppWrapper>
        <Spacer position="bottom" size="large">
          <NoConSVG/>
        </Spacer>
        <Spacer position="bottom" size="large" >
          <BadGateText variant='place'>Please Check your connection and try again, if:</BadGateText>
          <BadGateText variant='place'>Cellular Data or Wifi is on</BadGateText>
          <BadGateText variant='place'>Your device is connected to the internet</BadGateText>
          <Spacer  position="top" size="large">
            <TouchableOpacity onPress={handleRefresh}>
              <RefreshBtn>Retry</RefreshBtn>
            </TouchableOpacity>
          </Spacer>
        </Spacer>
      </NoAppWrapper>
    </BadGateContainer>
  );
}

const BadGateContainer = styled(View)`
  width: 90%;
  flex: 1;
  margin-horizontal: auto;
`;

const BadGateText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.placeholder};
`;

const RefreshBtn = styled(Text)`
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-vertical: ${(props) => props.theme.space[2]};
  color: #1A1F71;
  border-width: 1px;
  border-radius: 30px;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.interMedium};
  border-color: #1A1F71;
  margin-horizontal: auto;
`;
 
export default BadGateWay;