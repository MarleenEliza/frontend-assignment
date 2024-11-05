interface TheInputProps {
  value: string;
  min: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  ariaLabel: string;
}

const TheInput: React.FC<TheInputProps> = ({
  value,
  min,
  onChange,
  placeHolder,
  ariaLabel,
}) => {
  return (
    <input
      type="text"
      value={value}
      minLength={min}
      onChange={onChange}
      placeholder={placeHolder}
      aria-label={ariaLabel}
      className="the-input w-full p-2 border-2 border-grey-broken rounded-md focus:outline-none focus:border-schiphol-blue focus:ring focus:ring-light-blue transition-all duration-200 text-grey-storm"
    />
  );
};

export default TheInput;
