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
import { useCallback, useEffect, useState } from "react";
import GradientLine from "./gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "@/src/components/loader";
import BadGateWay from "@/src/components/NoNetwork";

const ReportScreen = ({ navigation }) => {
const [weight, setWeight] = useState("0");
const [height, setHeight] = useState("0");
const [caloriesBurnt, setCaloriesBurnt] = useState("0");
const [bmi, setBmi] = useState(" ");
const [userData, setUserData] = useState(" ");
const [isLoading, setIsLoading] = useState(false);
const [statWrapColor, setStatWrapColor] = useState("#1A1F71");
const [healthMessage, setHealthMessage] = useState("Welcome");
const [isApiCallFailed, setIsApiCallFailed] = useState(false);

const loadStepCount = async () => {
  try {
    const storedCalorieBurnt = await AsyncStorage.getItem("caloriesBurnt");
    if (storedCalorieBurnt !== null) {
      setCaloriesBurnt(JSON.parse(storedCalorieBurnt).toFixed(2));
    }
  } catch (error) {
    console.log("Error loading step count or calories burnt:", error);
  }
};

const getData = async () => {
  try {
    const storedData = await AsyncStorage.getItem("data");
    if (storedData !== null) {
      setUserData(JSON.parse(storedData));
    }
  } catch (error) {
    console.error("Error retrieving stored data:", error);
  }
};

const calculateBMI = (weight, heightCm) => {
  const height = heightCm / 100;
  const bmi = weight / (height * height);
  setBmi(bmi.toFixed(1));
  getMessageForBMI(bmi);
};

const handleGetDetails = async () => {
  setIsApiCallFailed(false);

  try {
    const response = await fetch(
      `https://switch-health.onrender.com/patient/${userData.data.user._id}/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userData.data.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setHeight(data.data.height.toString());
      setWeight(data.data.weight.toString());
      calculateBMI(data.data.weight, data.data.height);
      setIsApiCallFailed(false);
    } else {
      setIsApiCallFailed(true);
    }
  } catch (error) {
    setIsApiCallFailed(true);
  } finally {
    setIsLoading(false);
  }
};

const getMessageForBMI = (bmi) => {
  if (bmi < 18.5) {
    setHealthMessage("You're underweight");
  } else if (bmi < 24.9) {
    setHealthMessage("You're healthy");
  } else if (bmi < 29.9) {
    setHealthMessage("You're overweight");
  } else {
    setHealthMessage("You're obese");
  }
};

useEffect(() => {
  // Initial data load
  getData();
}, []);

useEffect(() => {
  if (userData) {
    setIsLoading(true);
    handleGetDetails();
  }
}, [userData]);

useFocusEffect(
  useCallback(() => {
    if (userData) {
      handleGetDetails();
      loadStepCount();
    }
  }, [userData])
);

const handleRefresh = async () => {
  await handleGetDetails();
};
    
  return (
    <>
      {isApiCallFailed && <BadGateWay handleRefresh={handleRefresh}/>}
      {!isApiCallFailed && <ReportWrapper>
        {isLoading && <Loading />}
        <ReportContainer>
          <BMIConatiner>
            <RulerContainer>
              <Height>
                <LengthSVG width={80} height={16} />
                <LengthText variant="body">Height {height} cm</LengthText>
              </Height>
              <Weight>
                <LengthSVG width={80} height={16} />
                <LengthText variant="body">Weight {weight} kg</LengthText>
              </Weight>
            </RulerContainer>
            <BMIBox>
              <BmiText variant="body">Body Mass Index (BMI)</BmiText>
              <Spacer position="top" size="medium">
                <BMIStatus>
                  <Numtext>{bmi}</Numtext>
                  <StatWrap color={statWrapColor}>
                    <LengthText>{healthMessage}</LengthText>
                  </StatWrap>
                </BMIStatus>
              </Spacer>
              <Spacer position="bottom" size="small">
                <GradientLine bmi={bmi} onColorChange={setStatWrapColor} />
              </Spacer>
            </BMIBox>
          </BMIConatiner>
          <BodyMeasurement>
            <BodyText>Body Measurements</BodyText>
            <CheckedText>Last checked 12/07/2024</CheckedText>
            <ReportContainer>
              <CaloriesBox>
                <CalorieItem>
                  <BpIcon>
                    <BpSVG width={35} height={25} />
                  </BpIcon>
                  <CalText>
                    {caloriesBurnt} <CalLiteText>cal</CalLiteText>
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
              <TouchableReport onPress={() => navigation.navigate('Weekly Report')}>
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
      </ReportWrapper>}
    </>
  );
};

export default ReportScreen;
