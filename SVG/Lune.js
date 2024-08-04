import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Lune(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.75 1a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0V1zM4.752 3.691a.75.75 0 00-1.06 1.061l1.414 1.414a.75.75 0 001.06-1.06L4.752 3.69zM20.308 4.752a.75.75 0 10-1.06-1.06l-1.414 1.414a.75.75 0 101.06 1.06l1.415-1.414z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM6.75 12a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
        fill="#fff"
      />
      <Path
        d="M1 11.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5H1zM21 11.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2zM6.166 18.894a.75.75 0 00-1.06-1.06l-1.414 1.414a.75.75 0 001.06 1.06l1.414-1.414zM18.894 17.834a.75.75 0 00-1.06 1.06l1.414 1.415a.75.75 0 001.06-1.061l-1.414-1.414zM12.75 21a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Lune
