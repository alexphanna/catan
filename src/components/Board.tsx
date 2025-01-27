import Tile from "./Tile";
import { Terrain } from "./Tile";

interface Props {
  width: number;
  height: number;
}

export default function Board(props: Props) {
  const board = [
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
  ];
  let maxLength = Math.max(...board.map((row) => row.length));

  let inradius = 100 / (maxLength * 2);
  let sideLength = (inradius * 2) / Math.sqrt(3);
  let circumradius = sideLength;
  let topMargin = (100 - circumradius * ((board.length - 1) * 2 - 1)) / 4;
  let leftMargin = 0;
  if (maxLength / (Math.sqrt(3) / 2) < board.length) {
    circumradius = 100 / ((board.length - 1) * 2 - 1);
    sideLength = circumradius;
    inradius = (sideLength * Math.sqrt(3)) / 2;
    topMargin = 0;
    leftMargin = (100 - maxLength * 2 * inradius) / 2;
  }

  return (
    <svg width="80vh" height="80vw" viewBox="0 0 100 100">
      {board.map((row, i) =>
        row?.map((_col, j) => (
          <Tile
            x={
              j * inradius * 2 +
              inradius * (maxLength + 1 - board[i].length) +
              leftMargin
            }
            y={
              i *
                (sideLength +
                  Math.sqrt(Math.pow(sideLength, 2) - Math.pow(inradius, 2))) +
              circumradius +
              topMargin
            }
            width={inradius * 2}
            terrain={"Desert"}
          />
        ))
      )}
    </svg>
  );
}
