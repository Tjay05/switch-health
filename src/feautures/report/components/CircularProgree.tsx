import { Svg, Circle } from "react-native-svg";
import { CircleContainer, CompleteText, RemainText, TextCircle } from "./Report.styles";

const CircularProgress = ({ value }) => {
  const size = 160;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = circumference - (value / 100) * circumference;

  return (
    <CircleContainer>
      <Svg width={size} height={size} style={{ transform: [{ rotate: '-90deg' }] }} >
        <Circle
          stroke='#B9EEFF'
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />
        <Circle
          stroke='#407CE2'
          fill='none'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          {...{ strokeWidth }}
        />
      </Svg>
      <TextCircle>
        <CompleteText>{value}</CompleteText>
        <RemainText>Out of 100</RemainText>
      </TextCircle>
    </CircleContainer>
  );
}

export default CircularProgress;