import IconContainer, { IconSize } from "components/atoms/IconContainer";
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
    <div className="search-bar mx-10">
      <div className="flex items-center gap-2">
        <TheInput
          value={value}
          min={3}
          onChange={onChange}
          placeHolder={placeHolder}
          ariaLabel={ariaLabel}
        />
        <IconContainer
          icon="search"
          variant="interactive"
          size={IconSize.medium}
        ></IconContainer>
      </div>

      {value.length > 0 && value.length < 3 && (
        <p className="search-error-message text-dark-red text-sm">
          Please enter at least 3 characters
        </p>
      )}
    </div>
  );
};

export default SearchBar;
