import { useState } from "react";
import SortButton from "components/molecules/SortButton";
import FlightCardList from "components/molecules/FlightCardList";
import { useFlightsContext } from "context/FlightsContext";
import IconContainer, { IconSize } from "components/atoms/IconContainer";

export type SortKey = "expectedTime" | "date";

const AirportResultSection: React.FC = () => {
  const { sortFlightResults, chosenAirport, flightResults } =
    useFlightsContext();
  const [sortOrder, setSortOrder] = useState<[SortKey, "asc" | "desc"]>([
    "expectedTime",
    "asc",
  ]);
  const handleSort = (sortKey: SortKey) => {
    let newSortOrder: [typeof sortKey, "asc" | "desc"] = [...sortOrder];

    // reverse already exsisting sort
    if (sortOrder[0] === sortKey) {
      newSortOrder[1] = sortOrder[1] === "asc" ? "desc" : "asc";
    } else {
      // update new sort to asc
      newSortOrder = [sortKey, "asc"];
    }
    setSortOrder(newSortOrder);
    sortFlightResults(...newSortOrder);
  };

  return (
    <section className="airport-result-section h-full flex flex-col bg-white/60 py-3 px-10 rounded-xl">
      <div className="flex gap-2 items-center">
        <IconContainer
          icon="flight"
          variant="display"
          size={IconSize.large}
        ></IconContainer>
        <h2 className="chosen-airport-title text-3xl mb-3 text-schiphol-blue font-bold lg:text-4xl lg:my-5">
          {chosenAirport}
        </h2>
      </div>

      <div className="py-4 px-2 lg:py-6">
        {flightResults && flightResults.length > 0 ? (
          <div>
            <div className="sort-controls flex gap-4">
              <SortButton
                sortKey="date"
                sortOrder={"date" === sortOrder[0] ? sortOrder[1] : "unsorted"}
                onClick={handleSort}
              >
                <IconContainer
                  variant="interactive"
                  size={IconSize.small}
                  icon="date"
                ></IconContainer>
                Date
              </SortButton>
              <SortButton
                sortKey="expectedTime"
                sortOrder={
                  "expectedTime" === sortOrder[0] ? sortOrder[1] : "unsorted"
                }
                onClick={handleSort}
              >
                <IconContainer
                  variant="interactive"
                  size={IconSize.small}
                  icon="clock"
                ></IconContainer>
                Expected Time
              </SortButton>
            </div>
            <FlightCardList flights={flightResults} />
          </div>
        ) : (
          <p className="no-results-message">No flight results available</p>
        )}
      </div>
    </section>
  );
};

export default AirportResultSection;
