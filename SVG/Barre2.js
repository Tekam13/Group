import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function Barre2(props) {
  return (
    <Svg
      width={269}
      height={4}
      viewBox="0 0 269 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={79} height={4} rx={2} fill="#fff" fillOpacity={0.32} />
      <Rect x={95} width={79} height={4} rx={2} fill="#fff" />
      <Rect
        x={190}
        width={79}
        height={4}
        rx={2}
        fill="#fff"
        fillOpacity={0.32}
      />
    </Svg>
  )
}

export default Barre2
