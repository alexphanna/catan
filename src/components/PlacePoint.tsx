import { useState } from "react";

interface Props {
  r: number;
  cx: number;
  cy: number;
  clipPath: string;
}
export default function PlacePoint(props: Props) {
  const [hovered, setHovered] = useState(false);
  return (
    <circle
      r={hovered ? props.r * 2 : 3}
      cx={props.cx}
      cy={props.cy}
      clip-path={props.clipPath}
      fill={hovered ? "#00000080" : "#00000040"}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    ></circle>
    
  );
}
