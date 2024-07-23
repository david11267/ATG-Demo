import StartingHorsesAccordion from "./StartingHorsesAccordion";
import { Race } from "../types/types";
import { stringToLocalTime } from "../utils/stringToTime";

interface Props {
  race: Race;
}

export default function RaceListItem({ race }: Props) {
  return (
    <div className="container p-2 mb-4 bg-secondary text-light">
      <h2 className="row fs-3">
        <div className="col-1">
          <strong>Nr: </strong>
          {race.number}
        </div>
        <div className="col">
          <strong>Race: </strong>
          {race.name}
        </div>
        <div className="col-3">
          <strong>Start: </strong>
          {stringToLocalTime(race.startTime)}
        </div>
      </h2>
      <div>
        <StartingHorsesAccordion starts={race.starts} />
      </div>
    </div>
  );
}
