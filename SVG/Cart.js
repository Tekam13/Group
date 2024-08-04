import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Cart(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={16} fill="#111" fillOpacity={0.12} />
      <Rect
        x={0.5}
        y={0.5}
        width={47}
        height={47}
        rx={15.5}
        stroke="#111"
        strokeOpacity={0.12}
      />
      <Path
        d="M26.528 19.533a.75.75 0 00-1.056-1.066l-1.795 1.78c-.676.669-1.228 1.217-1.62 1.704-.407.508-.702 1.023-.781 1.64a3.233 3.233 0 000 .817c.079.618.374 1.133.781 1.64.392.488.944 1.036 1.62 1.706l1.795 1.779a.75.75 0 001.056-1.066l-1.763-1.747c-.716-.71-1.206-1.197-1.538-1.61-.323-.402-.434-.66-.463-.892a1.727 1.727 0 010-.436c.03-.232.14-.49.463-.891.332-.414.822-.902 1.538-1.611l1.763-1.747z"
        fill="#2D264B"
      />
    </Svg>
  )
}

export default Cart
