import React from "react";
import StartingHorsesAccordion from "./StartingHorsesAccordion";
import { Race } from "../types/types";

interface Props {
  race: Race;
}

export default function RaceListItem({ race }: Props) {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-1">{race.number}</div>
        <div className="col">{race.name}</div>
        <div className="col-3">{race.startTime}</div>
      </div>
      <div
        className="border"
        style={{ padding: "1rem", backgroundColor: "beige" }}
      >
        <StartingHorsesAccordion />
      </div>
    </div>
  );
}
