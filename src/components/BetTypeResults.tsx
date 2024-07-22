import { Result } from "../types/types";
import RaceList from "./RaceList";

interface Props {
  resultList: Result[];
}

export default function BetTypeResults({ resultList }: Props) {
  return (
    <div>
      <div>
        {resultList?.map((r) => (
          <div key={r.id} style={{ padding: "1rem" }}>
            <div>
              {r.tracks.map((tr) => (
                <strong key={tr.id}>{tr.name}&emsp;</strong>
              ))}
              <strong>{r.startTime}</strong>
              <br />
            </div>
            <RaceList raceId={r.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
