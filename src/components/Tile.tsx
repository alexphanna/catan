import Hexagon from "./Hexagon";

interface Props {
  x: number;
  y: number;
  width: number;
  terrain: Terrain;
  number?: number;
  buildingSettlement: boolean;
  buildingRoad: boolean;
}

export type Terrain =
  | "Hills"
  | "Forest"
  | "Mountains"
  | "Fields"
  | "Pasture"
  | "Desert";

export default function Tile(props: Props) {
  const terrainColors: Record<Terrain, string> = {
    Hills: "#800000C0",
    Forest: "#004000C0",
    Mountains: "#808080C0",
    Fields: "#C0C000C0",
    Pasture: "#008000C0",
    Desert: "#806040C0",
  };
  const terrains: Terrain[] = [
    "Hills",
    "Forest",
    "Mountains",
    "Fields",
    "Pasture",
    "Desert",
  ];
  let color =
    terrainColors[terrains[Math.floor(Math.random() * terrains.length)]];
  return (
    <g className="tile">
      <Hexagon x={props.x} y={props.y} width={props.width} fill={color} buildingSettlement={props.buildingSettlement} buildingRoad={props.buildingRoad} />
      <text x={props.x} y={props.y} fontSize={props.width / Math.sqrt(3) / 2}>
        {Math.floor(Math.random() * 11) + 2}
      </text>
    </g>
  );
}
