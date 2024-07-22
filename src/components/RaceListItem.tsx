import StartingHorsesAccordion from "./StartingHorsesAccordion";
import { Race } from "../types/types";
import { stringToLocalTime } from "../utils/stringToTime";

interface Props {
  race: Race;
}

export default function RaceListItem({ race }: Props) {
  return (
    <div
      style={{ padding: "1rem", margin: "1rem", backgroundColor: "beige" }}
      className="container "
    >
      <h2 className="row">
        <div className="col-1">{race.number}</div>
        <div className="col">{race.name}</div>
        <div className="col-3">{stringToLocalTime(race.startTime)}</div>
      </h2>
      <div>
        <StartingHorsesAccordion starts={race.starts} />
      </div>
    </div>
  );
}
