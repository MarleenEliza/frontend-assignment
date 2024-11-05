import { useContext, useState } from "react";
import SortButton, { SortOderType } from "components/molecules/SortButton";
import FlightCardList from "components/molecules/FlightCardList";
import { useFlightsContext } from "context/FlightsContext";

const AirportResultSection: React.FC = () => {
  const { sortFlightResults, chosenAirport, flightResults } =
    useFlightsContext();
  const [sortOrderDate, setSortOrderDate] = useState<SortOderType>("unsorted");
  const [sortOrderExpectedTime, setSortOrderExpectedTime] =
    useState<SortOderType>("asc");

  const handleSort = (key: string) => {
    if (sortFlightResults) {
      sortFlightResults(key as "date" | "expectedTime", "asc"); // Modify as needed for toggling asc/desc
    }
  };

  return (
    <section className="airport-result-section">
      <h2 className="chosen-airport-title">{chosenAirport}</h2>
      <div className="sort-controls">
        <SortButton key="date" sortOrder={sortOrderDate} onClick={handleSort}>
          Sort by Date
        </SortButton>
        <SortButton
          key="expectedTime"
          sortOrder={sortOrderExpectedTime}
          onClick={handleSort}
        >
          Sort by Expected Time
        </SortButton>
      </div>
      {flightResults && flightResults.length > 0 ? (
        <FlightCardList flights={flightResults} />
      ) : (
        <p className="no-results-message">No flight results available</p>
      )}
    </section>
  );
};

export default AirportResultSection;
