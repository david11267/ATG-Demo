import { Result } from "../types/types";
import { stringToLocalTimeAndDate } from "../utils/stringToTime";
import RaceList from "./RaceList";

interface Props {
  resultList: Result[];
}

export default function BetTypeResults({ resultList }: Props) {
  return (
    <div>
      <h1 className="fs-1">
        {resultList?.map((r) => (
          <div key={r.id}>
            <div>
              {r.tracks.map((tr) => (
                <strong key={tr.id}>{tr.name}&emsp;</strong>
              ))}

              <strong>{stringToLocalTimeAndDate(r.startTime)}</strong>
              <br />
            </div>
            <RaceList raceId={r.id} />
          </div>
        ))}
      </h1>
    </div>
  );
}
