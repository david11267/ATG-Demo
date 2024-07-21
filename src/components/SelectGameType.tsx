import React from "react";
import { GameTypes } from "../App";

interface Props {
  handleGameTypeChange: (selectedGameType: GameTypes) => void;
}

export default function SelectGameType({ handleGameTypeChange }: Props) {
  const gameTypes: GameTypes[] = ["V75", "V86", "GS75"];

  return (
    <select
      style={{ marginBottom: "1rem" }}
      className="form-select form-select-lg"
      aria-label="Default select example"
      onChange={(e) => handleGameTypeChange(e.target.value as GameTypes)}
    >
      {gameTypes.map((gt) => (
        <option key={gt} value={gt}>
          {gt}
        </option>
      ))}
    </select>
  );
}
