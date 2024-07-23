import { useEffect, useState } from "react";
import Loading from "./Loading";
import RaceListItem from "./RaceListItem";
import { Race } from "../types/types";
import { getRaceDataAsync } from "../utils/api/fetchDataAsync";

interface Props {
  raceId: string;
}

export default function RaceList({ raceId }: Props) {
  const [races, setRaces] = useState<Race[] | null>(null);
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
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {races && races.map((r: Race) => <RaceListItem key={r.id} race={r} />)}
    </div>
  );
}
