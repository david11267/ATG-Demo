import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import AccordionSingle from "./AccordionSingle";

interface Props {
  raceId: string;
}

export default function RaceAccordion({ raceId }: Props) {
  const [races, setRaces] = useState<any>(null); // Adjust type as needed
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
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {races &&
        races.map((r: any) => (
          <AccordionSingle
            raceId={r.id}
            raceNumber={r.number}
            raceName={r.name}
            raceStartTime={r.startTime}
          />
        ))}
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
    const races = parsedResult.races;
    console.log(races);
    return races;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Rethrow the error to be caught in the component
  }
}
