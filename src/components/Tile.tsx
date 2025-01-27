import Hexagon from "./Hexagon";

interface Props {
    x: number;
    y: number;
    width: number;
    terrain: Terrain;
    number?: number;
}

export type Terrain = "Hills" | "Forest" | "Mountains" | "Fields" | "Pasture" | "Desert"

export default function Tile(props: Props) {
    const terrainColors: Record<Terrain, string> = {
        "Hills": "#FF0000",
        "Forest": "#008000",
        "Mountains": "#808080",
        "Fields": "#808000",
        "Pasture": "#00FF00",
        "Desert": "#FFC080"
    }
    let color = terrainColors[props.terrain];
    return (
        <>
            <Hexagon x={props.x} y={props.y} width={props.width} fill={color}/>
        </>
    )
}