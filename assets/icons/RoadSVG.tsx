import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const RoadSVG = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h35v35H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.02)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={50}
        height={50}
      />
    </Defs>
  </Svg>
)
export default RoadSVG;
