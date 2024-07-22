import { useEffect, useState } from "react";
import Loading from "./Loading";
import RaceListItem from "./RaceListItem";
import { Race } from "../types/types";

interface Props {
  raceId: string;
}

export default function RaceList({ raceId }: Props) {
  const [races, setRaces] = useState<Race[] | null>(null); // Adjust type as needed
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const fetchedRaces = await getRaceDataAsync(raceId);
        setRaces(fetchedRaces);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [raceId]); // Depend on raceId to refetch when it changes

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {races && races.map((r: Race) => <RaceListItem key={r.id} race={r} />)}
    </div>
  );
}

async function getRaceDataAsync(raceId: string) {
  try {
    const result = await fetch(
      `https://www.atg.se/services/racinginfo/v1/api/games/${raceId}`
    );

    if (!result.ok) {
      throw new Error(`Error: ${result.status} ${result.statusText}`);
    }

    const parsedResult = await result.json();
    const races: Race[] = parsedResult.races;
    console.log({ races: races });
    return races;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Rethrow the error to be caught in the component
  }
}
