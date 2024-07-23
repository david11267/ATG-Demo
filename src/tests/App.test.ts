import { assert, expect, test } from "vitest";
import { getRaceDataAsync, loadGamesData } from "../utils/api/fetchDataAsync";

test("loads gamesData and check if we get any", async () => {
  const gamesData = await loadGamesData("V75");
  assert.typeOf(gamesData, "array", "we have Results ");
});

test("loads gamesData and check if we get any", async () => {
  const raceId = "V75_2024-07-07_82_5";
  const gamesData = await getRaceDataAsync(raceId);
  assert.typeOf(gamesData, "array", "we have Results ");
});
