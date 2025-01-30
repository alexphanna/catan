interface Props {
    x: number;
    y: number;
    fill: string;
}

export default function Building(props: Props) {
    //return <circle stroke="#000" strokeWidth={.5} fill="#ffffff00" r={1.5} cx={props.x} cy={props.y}></circle>
    //return <polygon fill="#000000" points={pointToShape(props.x, props.y, "settlement")}></polygon>
}

function pointToShape(x: number, y: number, type: string) {
    const shapes: Record<string, string> = {
        settlement: `0,1 2,-1 4,1 4,5 0,5`,
        city: `0,0 2,-2 4,0 4,2 8,2 8,6 0,6`
    }
    const widths: Record<string, number> = {
        settlement: 2,
        city: 4
    }
    const heights: Record<string, number> = {
        settlement: 2,
        city: 3
    }

    let oldShape = shapes[type].split(" ")
    let shape = '';
    for (let i = 0; i < oldShape.length; i++) {
        let coords = oldShape[i].split(",");
        shape += `${parseFloat(coords[0]) + x - widths[type]},${parseFloat(coords[1]) + y - heights[type]} `;
    }

    return shape;
}