import Text from "@/src/components/typograpghy/Text.component";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";

const { height } = Dimensions.get("window");

export const ReportWrapper = styled(ScrollView)`
  width: 100%;
  background-color: #fff;
  flex: 1;
  height: 100%;
`;

export const ReportContainer = styled(View)`
  flex: 1;
  width: 90%;
  margin-horizontal: auto;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const BMIConatiner = styled(View)`
  flex: 1;
  flex-direction: row;
  margin-top: ${(props)=> props.theme.space[2]};
  border-bottom-color: #000000;
  border-bottom-width: 1px;
  padding-bottom: ${(props)=> props.theme.space[4]};
`;

export const RulerContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-vertical: ${(props)=> props.theme.space[2]};
  margin-right: ${(props)=> props.theme.space[0]};
  align-items: flex-start;
`;

export const LengthText = styled(Text)`
  font-size: 12px;
`;

export const Height = styled(View)`
  border-radius: 12px;
  padding-top: ${(props)=> props.theme.space[1]};
  padding-bottom: ${(props)=> props.theme.space[3]};
  padding-horizontal: ${(props)=> props.theme.space[3]};
  background-color: #F8DEBD;
`;

export const Weight = styled(View)`
  border-radius: 12px;
  padding-top: ${(props)=> props.theme.space[1]};
  padding-bottom: ${(props)=> props.theme.space[3]};
  padding-horizontal: ${(props)=> props.theme.space[3]};
  background-color: #D0FBFF;
`;

export const BMIBox = styled(View)`
  flex: 1;
  padding-horizontal: ${(props)=> props.theme.space[3]};
  padding-vertical: ${(props)=> props.theme.space[2]};
  background-color: #4A4949;
  border-radius: 12px;
`;

export const BmiText = styled(Text)`
  color: white;
  text-align: center;
`;

export const Numtext = styled(Text)`
  color: white;
  font-size: 19px;
`;

export const BMIStatus = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px
`;

export const StatWrap = styled(View)`
  padding-horizontal: 10px;
  padding-vertical: 3px;
  background-color: ${(props) => props.color || "#D6FFDD"};
  border-radius: 8px;
`;

export const BodyText = styled(Text)`
  font-size: 20px;
  font-family: ${(props)=> props.theme.fonts.interMedium};
`;

export const BodyMeasurement = styled(View)`
  flex: 1;
  margin-vertical: ${(props)=> props.theme.space[3]};
`;

export const CheckedText = styled(Text)`
  font-size: 13px;
  font-family: ${(props)=> props.theme.fonts.interBold};
  color: ${(props)=> props.theme.Colors.text.light};
`;

export const CaloriesBox = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-vertical: ${(props)=> props.theme.space[2]};
  padding: ${(props)=> props.theme.space[3]};
  border: 1px solid #E8E7E7;
  border-radius: 12px;
  background-color: #fff;
`;

export const CalorieItem = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const BpIcon = styled(View)`
  border-radius: 12px;
  padding-right: 18px;
  padding-left: 12px;
  padding-vertical: 12px;
  margin-bottom: ${(props)=> props.theme.space[1]};
  background-color: #F8DEBD;
`;

export const CalText = styled(Text)`
  font-size: 24px;
`;

export const CalLiteText = styled(Text)`
  color: #818181;
  font-size: 16px;
  font-family: ${(props)=> props.theme.fonts.interBold};
`;

export const CalActivity = styled(View)`
  border-radius: 4px;
  padding-horizontal: 12px;
  padding-vertical: 4px;
  margin-bottom: ${(props)=> props.theme.space[1]};
  background-color: #F8DEBD;
`;

export const ReportList = styled(View)`
  width: 100%;
  flex: 1;
`;

export const TouchableReport = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: white;
  border: 1px solid #221F1F1A;
  border-radius: 5px;
  width: 100%;
  padding: ${(props)=> props.theme.space[2]};
  margin-vertical: ${(props)=> props.theme.space[2]};
`;

export const ReportInfoWrapper = styled(View)`
  flex-direction: column;
  flex: 1;
`;

export const ReportInfo = styled(View)`
  width: 77%;
`;

export const ReportLightText = styled(Text)`
  font-size: 12px;
  font-family: ${(props)=> props.theme.fonts.poppinsRegular};
  color: ${(props)=> props.theme.Colors.text.light};
`;

export const ReportIcon = styled(View)`
  border-radius: 6px;
  padding: 10px;
  margin-bottom: ${(props)=> props.theme.space[1]};
  background-color: #407CE221;
`;

// Weekly Report STyles
export const ReportHead = styled(View)`
  position: absolute;
  top: 0;
  padding-bottom: ${height * 0.04}px;
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[4]};
  border-radius: 0px 0px 40px 40px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  background-color: #1a1f71;
`;

export const ReportTitle = styled(Text)`
  color: #FFFFFF;
  font-family: ${(props)=> props.theme.fonts.poppinsBold};
  font-size: ${(props)=> props.theme.fontSizes.info};
`;

export const CircleContainer = styled(View)`
  align-items: center;
  justify-content: center;
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const TextCircle = styled(View)`
  position: absolute;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CompleteText = styled(Text)`
  color: #FFFFFF;
  font-family: ${(props)=> props.theme.fonts.poppinsRegular};
  font-size: 48px;
`;

export const RemainText = styled(Text)`
  color: #B9EEFF;
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
  font-size: ${(props)=> props.theme.fontSizes.body};
`;

export const HeaderNote = styled(Text)`
  font-size: ${(props)=> props.theme.fontSizes.min};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
  color: #FFFFFF;
`;

export const VitalParamsSection = styled(View)`
  width: 100%;
  flex:1;
`;

export const ParamsHeader = styled(Text)`
  color: #10152C;
  font-size: ${(props)=> props.theme.fontSizes.h6};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
`;

export const ParamsWrapper = styled(View)`
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-vertical: ${(props) => props.theme.space[3]};
`;

export const ParamsItems = styled(View)`
  border-radius: 20px;
  background-color: #F5F5DA;
  width: 47%;
  align-items: start;
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
  flex-direction: column;
`;

export const ParamsHeadWrap = styled(View)`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const ParamsHeadText = styled(Text)`
  color: #000000;
  font-size: ${(props)=> props.theme.fontSizes.body};
  font-family: ${(props)=> props.theme.fonts.poppinsMedium};
  flex-wrap: wrap;
  width: 71%;
`;

export const ParamsCaption = styled(Text)`
  color: #10152C;
  font-size: ${(props)=> props.theme.fontSizes.min};
  font-family: ${(props)=> props.theme.fonts.poppinsBold};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const ParamText = styled(Text)`
  color: #10152C;
  font-size: ${(props)=> props.theme.fontSizes.min};
  font-family: ${(props)=> props.theme.fonts.poppinsRegular};
`;

export const ContentStyle = StyleSheet.create({
  contentContainer: {
    paddingTop: 350, // Adjust height of header
  },
});