import { MouseEventHandler, ReactNode } from "react";
import IconContainer, { IconSize } from "components/atoms/IconContainer";

export type SortOderType = "asc" | "desc" | "unsorted";
interface SortButtonProps {
  key: string;
  sortOrder: SortOderType;
  onClick: (key: string) => void;
  children: ReactNode;
}

const SortButton: React.FC<SortButtonProps> = ({
  key,
  sortOrder,
  onClick,
  children,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick(key);
  };

  return (
    <button
      aria-label={`Sort by ${sortOrder}`}
      onClick={handleClick}
      className="sort-button"
    >
      <IconContainer
        variant="interactive"
        icon={`sort-${sortOrder}`}
        size={IconSize.small}
      />
      {children}
    </button>
  );
};

export default SortButton;
