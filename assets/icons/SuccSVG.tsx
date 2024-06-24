import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SuccSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={106}
    height={106}
    fill="none"
    {...props}
  >
    <Circle
      cx={53}
      cy={53}
      r={51.5}
      fill="#FF8D4D"
      fillOpacity={0.06}
      stroke="url(#a)"
      strokeWidth={3}
    />
    <Path
      fill="#D9D9D9"
      d="M45.243 64.628a2.528 2.528 0 0 1 0-3.575l18.895-18.895a2.528 2.528 0 1 1 3.574 3.575L48.818 64.628a2.528 2.528 0 0 1-3.575 0Z"
    />
    <Path
      fill="url(#b)"
      d="M45.243 64.628a2.528 2.528 0 0 1 0-3.575l18.895-18.895a2.528 2.528 0 1 1 3.574 3.575L48.818 64.628a2.528 2.528 0 0 1-3.575 0Z"
    />
    <Rect
      width={14.397}
      height={4.806}
      x={40.117}
      y={52.719}
      fill="#D9D9D9"
      rx={2.403}
      transform="rotate(45 40.117 52.719)"
    />
    <Rect
      width={14.397}
      height={4.806}
      x={40.117}
      y={52.719}
      fill="url(#c)"
      rx={2.403}
      transform="rotate(45 40.117 52.719)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={53}
        x2={53}
        y1={0}
        y2={106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1A1F71" />
        <Stop offset={1} stopColor="#1A1F71" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={49.286}
        x2={63.492}
        y1={46.202}
        y2={60.408}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1A1F71" />
        <Stop offset={1} stopColor="#1A1F71" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={47.316}
        x2={47.316}
        y1={45.455}
        y2={64.552}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1A1F71" />
        <Stop offset={1} stopColor="#1A1F71" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SuccSVG;
