import { useEffect, useState } from "react";
import "./App.css";
import SelectGameType from "./components/SelectGameType";
import BetTypeResults from "./components/BetTypeResults";
import { GameTypes, Result } from "./types/types";
import { loadGamesData } from "./utils/api/fetchDataAsync";

function App() {
  const [selectedGameType, setSelectedGameType] = useState<GameTypes>("V75");
  const [resultList, setResultList] = useState<Result[]>();

  async function handleGameTypeChange(gameType: GameTypes) {
    setSelectedGameType(gameType);
    const gamesData = await loadGamesData(gameType);
    if (gamesData != undefined) {
      setResultList(gamesData);
    } else {
      setResultList(undefined);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const gamesData = await loadGamesData(selectedGameType);
      setResultList(gamesData);
    };
    getData();
  }, []);

  return (
    <div className="container py-4">
      <SelectGameType handleGameTypeChange={handleGameTypeChange} />
      {resultList && <BetTypeResults resultList={resultList} />}
    </div>
  );
}

export default App;
