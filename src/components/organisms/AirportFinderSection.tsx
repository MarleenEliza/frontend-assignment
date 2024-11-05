import SearchBar from "components/molecules/SearchBar";
import SearchResults from "components/molecules/SearchResults";
import { useFlightsContext } from "context/FlightsContext";
import { useState } from "react";

const AirportFinderSection: React.FC = () => {
  const [showResults, setShowResults] = useState(false);

  const { setSearchInput, setChosenAirport, searchResults, searchInput } =
    useFlightsContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setShowResults(input.length >= 3);
    setSearchInput(input);
  };

  const handleSelectResult = (target: string) => {
    if (setChosenAirport) {
      setShowResults(false);
      setChosenAirport(target);
    }
  };

  return (
    <section className="airport-finder-section relative lg:max-w-[1000px]">
      <SearchBar
        value={searchInput}
        onChange={handleSearchChange}
        placeHolder="Search for an airport"
        ariaLabel="Airport search input"
      />
      {showResults && (
        <SearchResults
          results={searchResults}
          onSelectResult={handleSelectResult}
        />
      )}
    </section>
  );
};

export default AirportFinderSection;
