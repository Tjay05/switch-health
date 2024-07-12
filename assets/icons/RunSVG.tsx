import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const RunSVG = (props: SvgProps) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiElEQVR4nO1ZTYgcVRB+y67//8bNTr3urtqdDCq5KG4URAMBDyImij97EMGDhgUNk67qSTSoMBo3omIOhiB6UNGcVRQNgsQEEyN68OIh4A8J/mASIYFsgohmI2+me+dn+3X3jDu9uzAfvMPQXe/1917VV1VvlOqjjz6WBGCU79XI+zTxaTMAZa/2eJ1aStDEL2mSc7EDZZtaMidhI0ERmWCtWuyou1MyEUD+ItePQtxylSb/1uXIxaw2mmQ6/UT4lMoH1SGN/CIg/zW7i8S/aeJdgLzedaW06IkABNcAyZ5095AfAPnJkZHKJS32Rp3SbEn29JSEJv9GjXI4dUdbx8+AlfHZOTxel2bjIN/dMxJA/kOa5EyHJKIx7ZC/ZpYMyjb7afALjVUnBgser3LH5JZ5oDAxCMivdkmgafDpVjLBWqNOYcxMG3dqPgmi6oUa5bOm/PK+UmqgKwpab1gGJJ+nSOUvYczMZCFjdjjL2oD8+py1vOD2jkk4Ttk1/p0clPwukX+led8olSZ5WSMfSxOB8fHJ85LWLpB/f6ztqH9nx0QA+Y0EeTwGJPfFfoTHqzTxP8nyGtxh3h2PIQTFjQjEJ2KU7Ffjbp0TIfnEQuKDkWJleSyJ0QoB8e/pLhY8Hm7WFCBPNmaoDmmSAxYXflh1AweDiTaXOOl48khSPGnkQ1kC30F+MCTydrQ5tXhEnrK448GuA92ggPJAbRHi10zM2N4DmLwYkL/OpF7Ip6IkqZuJI/+hic/G2MzMk/ymoTpkdcNYIvJsjbzHq7O8bwQlBxJqAFDeykoCiH8MA9bYHcxgM+15m3XPWQDJ1swnQXKuQP5dxk6PBddqlKMZiD/dcxIFd+PNFp+2udSHzfbLrtt8WRjcsWWPKS7T8s28AEh2dnAaZ4w0x83jOGW3Phf/GRI+DCTPdZUzuiTycXYiwTPZZp0YVHkjMfO3+vlPpVL5ArVY4ZC/JhMR5L+7zsp5Ia5CtYyZXBSoExRK5WFNsiP8ORBKcIYSvjbeNAlULQZAIzZ2RMFZr8vMjWEmV/t0ePiJSxeUhDMqN2iSf5tyw+5i8akrGv08H8lGRvYu6MlAvTVtS3R8yGRq89yU95rky4wns35BSNi6tnCHT0Yt7MqV1fNNLGRxMZU3ahcBCW2vyRVXl8qXN9to5A1JnSIgf5M7ESDekpQnTN3VbmOqVo1y3H4qvCtXEogMphlKcJPKXKtay5oUKzOAfFuuRAD5HesHoeyOa0GB+JXkskW25k3iJmupjnJ0mDYV2m3MxVtKgnzvf/XfNgDxV5rk2/ZgrWft2rM4/z4bXek0w/y9YBQsQRQ+6lmFC8jfNeSwsUh412sL8Kn4uZLaV97vunKR6hVGsDIWNTWAvD2SW3MVavmoA3FZ2fM2rUgg8b35U0j1GuDxaiOjYXJ7THvBPRbXOGHr9PSKwIuPJT7iuuL0nEQETf6jUV6wNU0mu6sE1O/AWgThOFBwvcobgLx9NpjnSubOVHtzUUf8vCkKTa+S20noDMVdfIwsMuiuiPD+hf7uPvpQvcN/9E/TwmQ4wAAAAAAASUVORK5CYII="
        id="b"
        width={50}
        height={50}
      />
    </Defs>
  </Svg>
)
export default RunSVG;
