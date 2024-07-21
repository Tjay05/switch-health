import BmiIcon from "@/assets/icons/BmIconSVG";
import FireSVG from "@/assets/icons/FireSVG";
import RoadSVG from "@/assets/icons/RoadSVG";
import RunSVG from "@/assets/icons/RunSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useCallback, useEffect, useState } from "react";
import CircularProgress from "../components/CircularProgree";
import { ContentStyle, HeaderNote, ParamsCaption, ParamsHeader, ParamsHeadText, ParamsHeadWrap, ParamsItems, ParamsWrapper, ParamText, ReportContainer, ReportHead, ReportTitle, ReportWrapper, VitalParamsSection } from "../components/Report.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import BadGateWay from "@/src/components/NoNetwork";

const WeeklyReport = () => {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [caloriesBurnt, setCaloriesBurnt] = useState("0");
  const [bmi, setBmi] = useState(" ");
  const [userData, setUserData] = useState(" ");
  const [goals, setGoals] = useState([]);
  const [insights, setInsights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [isApiCallFailed, setIsApiCallFailed] = useState(false);

  const items = [
    `Increase Step Count:  Aim to reach the 10,000 steps per day goal consistently.`,
    `Diversify Activities:  Include different types of physical activities to engage various muscle groups and prevent monotony.`,
    `Monitor Caloric Intake: Keep a balanced diet to ensure your caloric intake supports your activity level and health goals.`,
  ];

  const items2 = [
    `Hydration:  Ensure you are drinking sufficient water, especially on days with higher physical activity.`,
    `Sleep: Adequate sleep is crucial for recovery and overall health. Aim for 7-9 hours per night.`,
  ];

  useEffect(() => {
    setGoals(items);
    setInsights(items2);
  }, [])

  const loadStepCount = async () => {
    try {
      const storedStepCount = await AsyncStorage.getItem("stepCount");
      const storedCalorieBurnt = await AsyncStorage.getItem("caloriesBurnt");
      if (storedStepCount !== null) {
        setStepCount(JSON.parse(storedStepCount));
      }
      if (storedCalorieBurnt !== null) {
        setCaloriesBurnt(JSON.parse(storedCalorieBurnt).toFixed(2));
      }
    } catch (error) {
      console.log("Error loading step count or calories burnt:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadStepCount();
    }, [])
  );
  
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
      {!isApiCallFailed && <ReportWrapper contentContainerStyle={ContentStyle.contentContainer}>
        {/* <ReportHead>
          <ReportTitle variant="main1">Your Health Report for the week</ReportTitle>
          <CircularProgress value={90} />
          <Spacer position="top" size="large">
            <HeaderNote>*Calculated from recent health and fitness activites</HeaderNote>
          </Spacer>
        </ReportHead> */}
        <ReportContainer>
          <VitalParamsSection>
            <ParamsHeader>Vital Parameters</ParamsHeader>
            <ParamsWrapper>
              <ParamsItems>
                <ParamsHeadWrap>
                  <ParamsHeadText>Step Count</ParamsHeadText>
                  <RunSVG width={35} height={35} />
                </ParamsHeadWrap>
                <ParamsCaption>Total steps:</ParamsCaption>
                <ParamText>{stepCount}</ParamText>
              </ParamsItems>
              <ParamsItems>
                <ParamsHeadWrap>
                  <ParamsHeadText>Calories Burnt</ParamsHeadText>
                  <FireSVG width={35} height={35} />
                </ParamsHeadWrap>
                <ParamsCaption>Total Calories Burnt:</ParamsCaption>
                <ParamText>{caloriesBurnt }cal</ParamText>
              </ParamsItems>
              <ParamsItems>
                <ParamsHeadWrap>
                  <ParamsHeadText>Distance Travelled</ParamsHeadText>
                  <RoadSVG width={35} height={35} />
                </ParamsHeadWrap>
                <ParamsCaption>Total distance travelled:</ParamsCaption>
                <ParamText>0 km</ParamText>
              </ParamsItems>
              <ParamsItems>
                <ParamsHeadWrap>
                  <ParamsHeadText>Body Mass Index</ParamsHeadText>
                  <BmiIcon width={35} height={35} />
                </ParamsHeadWrap>
                <ParamsCaption>Current BMI:</ParamsCaption>
                <ParamText>{bmi}</ParamText>
              </ParamsItems>
            </ParamsWrapper>
          </VitalParamsSection>
          <ParamsHeader>Goals for Next Week</ParamsHeader>
          <Spacer position="top" size="small">
            {goals.map((item, i) => (
              <ParamsCaption key={i}>
                {`${i + 1}. ${item}`}
              </ParamsCaption>
            ))}
          </Spacer>
          <ParamsHeader>Insights and Recommendations</ParamsHeader>
          <Spacer position="top" size="small">
            {insights.map((item, i) => (
              <ParamsCaption key={i}>
                {`${i + 1}. ${item}`}
              </ParamsCaption>
            ))}
          </Spacer>
        </ReportContainer>
      </ReportWrapper>}
    </>
  );
}
 
export default WeeklyReport;