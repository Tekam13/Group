import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function Logo(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#D9D9D9" />
    </Svg>
  )
}

export default Logo
