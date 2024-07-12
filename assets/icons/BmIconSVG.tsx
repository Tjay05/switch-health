import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const BmiIcon = (props: SvgProps) => (
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
export default BmiIcon;
