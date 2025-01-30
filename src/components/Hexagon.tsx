import { useState } from "react";
import PlacePoint from "./PlacePoint";

interface Props {
  x: number;
  y: number;
  width: number;
  fill: string;
}

export default function Hexagon(props: Props) {
  let [showHotspots, setShowHotspots] = useState(false);
  let vertices: number[][] = [];
  let shortenedVertices: number[][] = [];
  let sideLength = (props.width / 2) * (2 / Math.sqrt(3));
  for (let i = 0; i < 6; i++) {
    const angle = ((2 * Math.PI) / 6) * i - Math.PI / 2;
    vertices.push([
      props.x + sideLength * Math.cos(angle),
      props.y + sideLength * Math.sin(angle),
    ]);
    shortenedVertices.push([
      props.x + (sideLength - 0.25) * Math.cos(angle),
      props.y + (sideLength - 0.25) * Math.sin(angle),
    ]);
  }
  // egdges
  let edges: number[][] = [];
  for (let i = 0; i < 6; i++) {
    edges.push([
      (vertices[i][0] + vertices[(i + 1) % vertices.length][0]) / 2,
      (vertices[i][1] + vertices[(i + 1) % vertices.length][1]) / 2,
    ]);
  }
  return (
    <>
      <polygon
        points={shortenedVertices.map((vertex) => vertex.join(",")).join(" ")}
        fill={props.fill}
      />
      <defs>
        <clipPath id={props.x + "" + props.y}>
          <polygon
            points={shortenedVertices
              .map((vertex) => vertex.join(","))
              .join(" ")}
            fill={props.fill}
          />
        </clipPath>
      </defs>
      {true ? (
        <>
          {edges.map((vertex) => (
            <PlacePoint
              r={2}
              cx={vertex[0]}
              cy={vertex[1]}
              clipPath={"url(#" + props.x + "" + props.y + ")"}
            ></PlacePoint>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
