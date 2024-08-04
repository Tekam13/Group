import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Line(props) {
  return (
    <Svg
      width={292}
      height={2}
      viewBox="0 0 292 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 1h291.5" stroke="#fff" strokeOpacity={0.12} />
    </Svg>
  )
}

export default Line
