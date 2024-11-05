import TheInput from "components/atoms/TheInput";

interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  ariaLabel: string;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  placeHolder,
  value,
  ariaLabel,
}) => {
  return (
    <div className="search-bar">
      <TheInput
        value={value}
        min={3}
        onChange={onChange}
        placeHolder={placeHolder}
        ariaLabel={ariaLabel}
      />
      <p className="search-error-message">Please enter at least 3 characters</p>
    </div>
  );
};

export default SearchBar;
