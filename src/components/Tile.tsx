import Hexagon from "./Hexagon";

interface Props {
    x: number;
    y: number;
    width: number;
    terrain: string;
    number?: number;
}

export default function Tile(props: Props) {
    return (
        <>
            <Hexagon x={props.x} y={props.y} width={props.width}/>
            <circle cx={props.x} cy={props.y} r={props.width / 5} fill="#C0C0C0" />
        </>
    )
}