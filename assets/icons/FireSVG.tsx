import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const FireSVG = (props: SvgProps) => (
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
export default FireSVG;
