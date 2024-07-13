import BmiIcon from "@/assets/icons/BmIconSVG";
import FireSVG from "@/assets/icons/FireSVG";
import RoadSVG from "@/assets/icons/RoadSVG";
import RunSVG from "@/assets/icons/RunSVG";
import Spacer from "@/src/components/spacer/Spacer.component";
import Text from "@/src/components/typograpghy/Text.component";
import { useEffect, useState } from "react";
import CircularProgress from "../components/CircularProgree";
import { ContentStyle, HeaderNote, ParamsCaption, ParamsHeader, ParamsHeadText, ParamsHeadWrap, ParamsItems, ParamsWrapper, ParamText, ReportContainer, ReportHead, ReportTitle, ReportWrapper, VitalParamsSection } from "../components/Report.styles";

const WeeklyReport = () => {
  const [goals, setGoals] = useState([]);
  const [insights, setInsights] = useState([]);

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


  return (
    <ReportWrapper contentContainerStyle={ContentStyle.contentContainer}>
      <ReportHead>
        <ReportTitle variant="main1">Your Health Report for the week</ReportTitle>
        <CircularProgress value={10} />
        <Spacer position="top" size="large">
          <HeaderNote>*Calculated from recent health and fitness activites</HeaderNote>
        </Spacer>
      </ReportHead>
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
              <ParamText>30,000</ParamText>
            </ParamsItems>
            <ParamsItems>
              <ParamsHeadWrap>
                <ParamsHeadText>Calories Burnt</ParamsHeadText>
                <FireSVG width={35} height={35} />
              </ParamsHeadWrap>
              <ParamsCaption>Total Calories Burnt:</ParamsCaption>
              <ParamText>600 cal</ParamText>
            </ParamsItems>
            <ParamsItems>
              <ParamsHeadWrap>
                <ParamsHeadText>Distance Travelled</ParamsHeadText>
                <RoadSVG width={35} height={35} />
              </ParamsHeadWrap>
              <ParamsCaption>Total distance travelled:</ParamsCaption>
              <ParamText>10,000 km</ParamText>
            </ParamsItems>
            <ParamsItems>
              <ParamsHeadWrap>
                <ParamsHeadText>Body Mass Index</ParamsHeadText>
                <BmiIcon width={35} height={35} />
              </ParamsHeadWrap>
              <ParamsCaption>Current BMI:</ParamsCaption>
              <ParamText>122.9</ParamText>
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
    </ReportWrapper>
  );
}
 
export default WeeklyReport;