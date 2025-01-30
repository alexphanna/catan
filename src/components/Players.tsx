interface Props {
  players: string[];
  turn: number;
}

export default function Players(props: Props) {
  return (
    <ul style={{ position: "fixed", top: 0, right: 0 }}>
      {props.players.map((player, i) => (
        <li style={{ color: i == props.turn ? "#000000" : "#808080" }}>
          {player}
        </li>
      ))}
    </ul>
  );
}
