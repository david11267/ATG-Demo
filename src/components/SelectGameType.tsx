import { GameTypes } from "../types/types";

interface Props {
  handleGameTypeChange: (gameType: GameTypes) => void;
}

export default function SelectGameType({ handleGameTypeChange }: Props) {
  const gameTypes: GameTypes[] = ["V75", "V86", "GS75"];

  return (
    <select
      className="form-select form-select-lg mb-4"
      aria-label="SelectGameType"
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
