import Board from "./components/Board";
import Players from "./components/Players";

export default function App() {
  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          color: "#C0C0C0",
          position: "fixed",
          left: 0,
          top: 0,
          margin: 20,
        }}
      >
        FRONTIER
      </h1>
      <Board />
      <Players players={["Alex", "Nick", "Stav", "Adam"]} turn={0}></Players>
    </>
  );
}
