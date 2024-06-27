import BmiSVG from "@/assets/icons/BmiSVG";
import BpSVG from "@/assets/icons/BpSVG";
import LengthSVG from "@/assets/icons/LengthSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BMIBox,
  BMIConatiner,
  BMIStatus,
  BmiText,
  BodyMeasurement,
  BodyText,
  BpIcon,
  CalActivity,
  CalLiteText,
  CalorieItem,
  CaloriesBox,
  CalText,
  CheckedText,
  Height,
  LengthText,
  Numtext,
  ReportContainer,
  ReportIcon,
  ReportInfo,
  ReportInfoWrapper,
  ReportLightText,
  ReportList,
  ReportWrapper,
  RulerContainer,
  StatWrap,
  TouchableReport,
  Weight,
} from "../components/Report.styles";
import LinearGradient from "react-native-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import GradientLine from "./gradient";

const colors = [
  { label: "Red", value: "#ff0000" },
  { label: "Orange", value: "#ffa500" },
  { label: "Yellow", value: "#ffff00" },
  { label: "Green", value: "#008000" },
  { label: "Blue", value: "#0000ff" },
  { label: "Indigo", value: "#4b0082" },
  { label: "Violet", value: "#ee82ee" },
];

const ReportScreen = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  return (
    <>
      <ReportWrapper>
        <ReportContainer>
          <BMIConatiner>
            <RulerContainer>
              <Height>
                <LengthSVG width={80} height={16} />
                <LengthText variant="body">Height 170 cm</LengthText>
              </Height>
              <Weight>
                <LengthSVG width={80} height={16} />
                <LengthText variant="body">Weight 72 kg</LengthText>
              </Weight>
            </RulerContainer>
            <BMIBox>
              <BmiText variant="body">Body Mass Index (BMI)</BmiText>
              <Spacer position="top" size="medium">
                <BMIStatus>
                  <Numtext>24.9</Numtext>
                  <StatWrap>
                    <LengthText>You're healthy</LengthText>
                  </StatWrap>
                </BMIStatus>
              </Spacer>
              <Spacer position="bottom" size="small">
                <GradientLine />
                <BmiSVG width={150} height={45} />
              </Spacer>
            </BMIBox>
          </BMIConatiner>
          <BodyMeasurement>
            <BodyText>Body Measurements</BodyText>
            <CheckedText>Last checked 24/09/2024</CheckedText>
            <ReportContainer>
              <CaloriesBox>
                <CalorieItem>
                  <BpIcon>
                    <BpSVG width={35} height={25} />
                  </BpIcon>
                  <CalText>
                    2.9 <CalLiteText>cal</CalLiteText>
                  </CalText>
                  <Spacer position="top" size="medium">
                    <CalActivity>
                      <Text>Light Activity</Text>
                    </CalActivity>
                  </Spacer>
                </CalorieItem>
                <CalorieItem>
                  <BodyText>Calories Burnt</BodyText>
                </CalorieItem>
              </CaloriesBox>
            </ReportContainer>
          </BodyMeasurement>
          <ReportList>
            <Text variant="main">Latest report</Text>
            <ReportInfoWrapper>
              <TouchableReport>
                <ReportIcon>
                  <MaterialCommunityIcons
                    name="clipboard-pulse-outline"
                    size={28}
                    color={"#407CE2"}
                  />
                </ReportIcon>
                <Spacer position="right" size="medium" />
                <Spacer position="right" size="small" />
                <ReportInfo>
                  <Text>General report</Text>
                  <Spacer position="top" size="small">
                    <ReportLightText>Jul 10, 2023</ReportLightText>
                  </Spacer>
                </ReportInfo>
              </TouchableReport>
              <TouchableReport>
                <ReportIcon>
                  <MaterialCommunityIcons
                    name="clipboard-pulse-outline"
                    size={28}
                    color={"#407CE2"}
                  />
                </ReportIcon>
                <Spacer position="right" size="medium" />
                <Spacer position="right" size="small" />
                <ReportInfo>
                  <Text>General report</Text>
                  <Spacer position="top" size="small">
                    <ReportLightText>Jul 10, 2023</ReportLightText>
                  </Spacer>
                </ReportInfo>
              </TouchableReport>
            </ReportInfoWrapper>
          </ReportList>
        </ReportContainer>
      </ReportWrapper>
    </>
  );
};

export default ReportScreen;
