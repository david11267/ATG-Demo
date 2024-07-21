import React, { Suspense } from "react";
import { Race } from "../types/types";
import Loading from "./Loading";
import RaceAccordion from "./RaceAccordion";

interface Props {
  raceList: Race[] | null;
}

export default function BetTypeResults({ raceList }: Props) {
  return (
    <div className="border">
      <div style={{ padding: "1rem" }} className="border">
        {raceList?.map((r) => (
          <div key={r.id} style={{ padding: "1rem" }} className="border">
            <div>
              {r.tracks.map((tr) => (
                <strong key={tr.id}>{tr.name}&emsp;</strong>
              ))}
              <strong>{r.startTime}</strong>
              <br />
            </div>
            <RaceAccordion raceId={r.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
