import TextButton from "components/atoms/TextButton";

interface SearchResultsProps {
  results: string[];
  onSelectResult: (target: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onSelectResult,
}) => {
  return (
    <ul className="search-results">
      {results.length > 0 ? (
        results.map((result, index) => (
          <li key={index}>
            <TextButton
              type="button"
              ariaLabel={`Select ${result}`}
              clickFunction={() => onSelectResult(result)}
            >
              {result}
            </TextButton>
          </li>
        ))
      ) : (
        <p className="no-results-message">No results found</p>
      )}
    </ul>
  );
};

export default SearchResults;
