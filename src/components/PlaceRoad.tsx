import { useState } from "react";

interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  clipPath: string;
}
export default function PlaceRoad(props: Props) {
  const [hovered, setHovered] = useState(false);
  const x = (props.x1 + props.x2) / 2;
  const y = (props.y1 + props.y2) / 2;

  return (
    <g clip-path={props.clipPath}>
      <rect
        width={8}
        height={hovered ? 4 : 2}
        x={x - 4}
        y={y - (hovered ? 2 : 1)}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
        transform={
          "rotate(" +
          Math.atan((props.y1 - props.y2) / (props.x1 - props.x2)) *
            (180 / Math.PI) +
          ")"
        }
        fill={hovered ? "#00000080" : "#00000040"}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      ></rect>
    </g>
  );
}
