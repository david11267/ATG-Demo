import { GameTypes, Race } from "../../types/types";
import { Result } from "../../types/types";

export async function getRaceDataAsync(raceId: string) {
  try {
    const result = await fetch(
      `https://www.atg.se/services/racinginfo/v1/api/games/${raceId}`
    );

    if (!result.ok) {
      throw new Error(`Error: ${result.status} ${result.statusText}`);
    }

    const parsedResult = await result.json();
    const races: Race[] = parsedResult.races;
    return races;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export async function loadGamesData(selectedGameType: GameTypes) {
  try {
    const response = await fetch(
      `https://www.atg.se/services/racinginfo/v1/api/products/${selectedGameType}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const results: Result[] = data.results;
    return results;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
