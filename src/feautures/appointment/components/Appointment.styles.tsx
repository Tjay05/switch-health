import Text from "@/src/components/typograpghy/Text.component";
import { Image, ScrollView, View } from "react-native";
import { styled } from "styled-components";

export const AppointmentWrapper = styled(ScrollView)`
  background-color: #fff;
  flex: 1;
  width: 100%;
`;

export const AppointmentContainer = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
`;

export const AppointmentSection = styled(View)`
  width: 100%
`;

export const DailyAppointmentContainer = styled(View)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AppointmentBox = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
  justify-content: space-between;
`;

export const DocAppBox = styled(View)`
  background-color: #407BFF14;
  border-radius: 43px;
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  flex: 1;
  width: 100%;
`;

export const AppDocImg = styled(Image)`
  width: 35%;
  height: 85px;
  border-radius: 20px 0px 0px 20px;
`;

export const AppointmentInfo = styled(View)`
  flex-direction: column;
  flex: 1;
  width: 60%;
`;

export const AppDocName= styled(Text)`
  color: #221F1F;
  font-family: ${(props) => props.theme.fonts.poppinsMedium};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const RateAosWrap = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
`;

export const RateAos = styled(Text)`
  color: #221F1F66;
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  font-size: ${(props) => props.theme.fontSizes.min};
`;

export const AppDocLocation = styled(Text)`
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
  font-size: 10px;
  color: #221F1F66;
`;

export const NoAppWrapper = styled(View)`
  margin-top: ${(props) => props.theme.space[5]};
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;