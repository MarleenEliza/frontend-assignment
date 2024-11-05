import { MouseEventHandler, ReactNode, useMemo } from "react";
import IconContainer, { IconSize } from "components/atoms/IconContainer";
import { SortKey } from "components/organisms/AirtportResultSection";

export type SortOderType = "asc" | "desc" | "unsorted";
interface SortButtonProps {
  sortKey: SortKey;
  sortOrder: SortOderType;
  onClick: (sortKey: SortKey) => void;
  children: ReactNode;
}

const SortButton: React.FC<SortButtonProps> = ({
  sortKey,
  sortOrder,
  onClick,
  children,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick(sortKey);
  };
  const variant = useMemo(() => {
    return sortOrder === "unsorted" ? "inactive" : "interactive";
  }, [sortOrder]);

  return (
    <button
      aria-label={`Sort by ${sortOrder}`}
      onClick={handleClick}
      className="sort-button font-bold flex gap-1 items-center text-afternoon-blue bg-white px-4 py-2 rounded shadow-md border border-lightmorning-blue hover:bg-afternoon-blue hover:text-white transition-colors duration-200 group"
    >
      {children}
      <IconContainer
        variant={variant}
        icon={`sort-${sortOrder}`}
        size={IconSize.small}
        className="group-hover:text-white transition-colors duration-200"
      />
    </button>
  );
};

export default SortButton;
