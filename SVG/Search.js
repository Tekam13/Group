import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Recherche(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75.25C4.365.25 0 4.615 0 10s4.365 9.75 9.75 9.75S19.5 15.385 19.5 10 15.135.25 9.75.25zM1.5 10A8.25 8.25 0 1118 10a8.25 8.25 0 01-16.5 0z"
        fill="#2D264B"
      />
      <Path
        d="M18.28 17.47a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06-1.06l-4-4z"
        fill="#2D264B"
      />
    </Svg>
  )
}

export default Recherche
