import { Dispatch, SetStateAction } from "react";
import styles from "./BottomBar.module.css";

interface Props {
  buildingSettlement: Dispatch<SetStateAction<boolean>>;
  buildingRoad: Dispatch<SetStateAction<boolean>>;
}

export default function BottomBar(props: Props) {
  return (
    <div className={styles.bar}>
      <button
        className={styles.button}
        onClick={() => {
          props.buildingRoad(false);
          props.buildingSettlement(true);
        }}
      >
        SETTLEMENT
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.buildingSettlement(false);
          props.buildingRoad(true);
        }}
      >
        ROAD
      </button>
    </div>
  );
}
