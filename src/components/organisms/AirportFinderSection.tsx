import SearchBar from "components/molecules/SearchBar";
import SearchResults from "components/molecules/SearchResults";
import { useFlightsContext } from "context/FlightsContext";

const AirportFinderSection: React.FC = () => {
  const { setSearchInput, setChosenAirport, searchResults, searchInput } =
    useFlightsContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSelectResult = (target: string) => {
    if (setChosenAirport) {
      setChosenAirport(target);
    }
  };

  return (
    <section className="airport-finder-section">
      <SearchBar
        value={searchInput}
        onChange={handleSearchChange}
        placeHolder="Search for an airport"
        ariaLabel="Airport search input"
      />
      {searchResults && searchResults.length > 0 && (
        <SearchResults
          results={searchResults.map((flights) => flights.airport)}
          onSelectResult={handleSelectResult}
        />
      )}
    </section>
  );
};

export default AirportFinderSection;
