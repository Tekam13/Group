import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bar4(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.667a6.333 6.333 0 100 12.666 6.333 6.333 0 000-12.666zM10.666 11a4.333 4.333 0 118.667 0 4.333 4.333 0 01-8.666 0z"
        fill="gray"
        fillOpacity={0.72}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 .667C7.084.667.667 7.084.667 15c0 4.065 1.693 7.735 4.41 10.343A14.288 14.288 0 0015 29.333c3.85 0 7.349-1.52 9.923-3.99A14.295 14.295 0 0029.333 15C29.333 7.084 22.916.667 15 .667zM2.666 15C2.666 8.188 8.188 2.667 15 2.667c6.811 0 12.333 5.521 12.333 12.333 0 2.926-1.018 5.614-2.721 7.729A6.332 6.332 0 0019 19.333h-8a6.332 6.332 0 00-5.612 3.396A12.278 12.278 0 012.667 15zM19 21.333a4.336 4.336 0 014.11 2.958A12.282 12.282 0 0115 27.333a12.282 12.282 0 01-8.111-3.042 4.336 4.336 0 014.11-2.958h8z"
        fill="gray"
        fillOpacity={0.72}
      />
    </Svg>
  )
}

export default Bar4
