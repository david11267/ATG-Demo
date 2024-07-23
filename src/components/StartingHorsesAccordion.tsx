import { Start } from "../types/types";

interface Props {
  starts: Start[];
}

export default function StartingHorsesAccordion({ starts }: Props) {
  return (
    <>
      {starts.map((s) => (
        <div
          key={s.id}
          className="accordion accordion-flush"
          id={`accordionFlush${s.id}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collaps${s.id}`}
                aria-expanded="false"
                aria-controls={`flush-collaps${s.id}`}
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <strong>Häst {s.number}</strong>
                      <div>{s.horse.name}</div>
                    </div>

                    <div className="col">
                      <strong>Förare </strong>
                      <div>
                        {s.driver.firstName} {s.driver.lastName}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div
              id={`flush-collaps${s.id}`}
              className="accordion-collapse collapse"
              data-bs-parent={`#accordionFlush${s.id}`}
            >
              <div className="accordion-body bg-secondary-subtle fs-6">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <strong>Far</strong>
                      <div>{s.horse.pedigree.father.name}</div>
                    </div>
                    <div className="col">
                      <strong>Tränare</strong>
                      <div>
                        {s.horse.trainer.firstName} {s.horse.trainer.lastName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
