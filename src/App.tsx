import { useEffect, useState } from "react";
import "./App.css";
import SelectGameType from "./components/SelectGameType";
import BetTypeResults from "./components/BetTypeResults";
import { Result } from "./types/types";
import { loadGamesData } from "./utils/api/fetchDataAsync";

export type GameTypes = "V75" | "V86" | "GS75";

function App() {
  const [selectedGameType, setSelectedGameType] = useState<GameTypes>("V75");
  const [resultList, setResultList] = useState<Result[]>();

  // is this making my app heavy since it checks if on render?
  useEffect(() => {
    const getData = async () => {
      const gamesData = await loadGamesData(selectedGameType);
      if (gamesData != undefined) {
        setResultList(gamesData);
      }
    };
    getData();
  }, [selectedGameType]);

  return (
    <div style={{ paddingTop: "1rem" }} className="container">
      <SelectGameType handleGameTypeChange={handleGameTypeChange} />
      {resultList && <BetTypeResults resultList={resultList} />}
    </div>
  );

  async function handleGameTypeChange(gameType: GameTypes) {
    setSelectedGameType(gameType);
    const gamesData = await loadGamesData(gameType);
    if (gamesData != undefined) {
      setResultList(gamesData);
    } else {
      setResultList(undefined);
    }
  }
}

export default App;
