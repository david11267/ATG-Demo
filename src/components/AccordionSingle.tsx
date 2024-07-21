import React from "react";

interface Props {
  raceNumber: number;
  raceName: string;
  raceStartTime: string;
  raceId: string;
}

export default function AccordionSingle({
  raceId,
  raceNumber,
  raceName,
  raceStartTime,
}: Props) {
  return (
    <div className="accordion accordion-flush" id={`accordionFlush${raceId}`}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${raceId}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${raceId}`}
          >
            {raceNumber}
            {raceName}
            {raceStartTime}
          </button>
        </h2>
        <div
          id={`flush-collapse${raceId}`}
          className="accordion-collapse collapse"
          data-bs-parent={`#accordionFlush${raceId}`}
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
    </div>
  );
}
