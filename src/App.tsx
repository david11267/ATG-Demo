import { useState } from "react";
import "./App.css";
import SelectGameType from "./components/SelectGameType";
import BetTypeResults from "./components/BetTypeResults";
import { Race, Result } from "./types/types";

export type GameTypes = "V75" | "V86" | "GS75";

function App() {
  const [selectedGameType, setSelectedGameType] = useState<GameTypes>("V75");
  const [resultList, setResultList] = useState<Result[]>();

  return (
    <>
      <SelectGameType handleGameTypeChange={handleGameTypeChange} />
      {resultList && <BetTypeResults resultList={resultList} />}
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

      const results: Result[] = data.results;
      console.log({ results: results });
      setResultList(results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }

    /////////////
  }
}

export default App;
