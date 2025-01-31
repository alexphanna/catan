import Board from "./components/Board";
import Players from "./components/Players";
import "./App.css";
import BottomBar from "./components/BottomBar";
import { useState } from "react";

export default function App() {
  const [buildingRoad, setBuildingRoad] = useState(false)
  const [buildingSettlement, setBuildingSettlement] = useState(false)
  return (
    <>
      <h1 id="title">FRONTIER</h1>
      <Board buildingSettlement={buildingSettlement} buildingRoad={buildingRoad} />
      <Players players={["Alex", "Nick", "Stav", "Adam"]} turn={0} />
      <BottomBar buildingSettlement={setBuildingSettlement} buildingRoad={setBuildingRoad} />
    </>
  );
}
