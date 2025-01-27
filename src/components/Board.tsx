import Tile from "./Tile";

interface Props {
  width: number;
  height: number;
}

export default function Board(props: Props) {
  const board = [
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
  ];
  let maxLength = 0;
  for (let row of board) {
    if (maxLength < row.length) {
      maxLength = row.length;
    }
  }

  const tileWidth = 100 / maxLength;
  const tileRadius = tileWidth / 2;
  const tileSideLength = tileWidth / Math.sqrt(3);

  return (
    <svg width={props.width} height={props.width} viewBox="0 0 100 100">
      {board.map((row, i) =>
        row?.map((col, j) => (
          <Tile
            x={j * tileWidth + (maxLength - row.length) * tileRadius + tileRadius}
            y={i * tileSideLength * (3 / 2) + tileSideLength}
            width={tileWidth}
            terrain="desert"
          />
        ))
      )}
    </svg>
  );
}
