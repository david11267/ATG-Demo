import { useState } from "react";
import "./App.css";
import SelectGameType from "./components/SelectGameType";
import BetTypeResults from "./components/BetTypeResults";
import { Race } from "./types/types";

export type GameTypes = "V75" | "V86" | "GS75";

function App() {
  const [selectedGameType, setSelectedGameType] = useState<GameTypes>("V75");
  const [raceList, setRaceList] = useState<Race[] | null>(null);

  return (
    <>
      <SelectGameType handleGameTypeChange={handleGameTypeChange} />
      <BetTypeResults raceList={raceList} />
    </>
  );

  async function handleGameTypeChange(selectedGameType: GameTypes) {
    setSelectedGameType(selectedGameType);

    try {
      const response = await fetch(
        `https://www.atg.se/services/racinginfo/v1/api/products/${selectedGameType}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      const raceList: Race[] = data.results;
      setRaceList(raceList);
      console.log(raceList);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }

    /////////////
  }
}

export default App;
