interface Props {
  x: number;
  y: number;
  width: number;
  fill: string;
}

export default function Hexagon(props: Props) {
  let vertices = "";
  let sideLength = (props.width / 2) * (2 / Math.sqrt(3)) - .25;
  for (let i = 0; i < 6; i++) {
    const angle = ((2 * Math.PI) / 6) * i - Math.PI / 2;
    vertices += `${props.x + sideLength * Math.cos(angle)},${
      props.y + sideLength * Math.sin(angle)
    } `;
  }
  return <polygon points={vertices} fill={props.fill} />;
}
