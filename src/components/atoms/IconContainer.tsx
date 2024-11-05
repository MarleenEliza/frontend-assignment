import SearchIcon from "./icons/SearchIcon";
import ClockIcon from "./icons/ClockIcon";
import IconBroken from "./icons/IconBroken";
import SortAscIcon from "./icons/SortAscIcon";
import SortDescIcon from "./icons/SearchDescIcon";
import SortUnsortedIcon from "./icons/SortUnsortedIcon";
import ScoreIcon from "./icons/ScoreIcon";
import CalendarIcon from "./icons/CalendarIcon";
import FlightIcon from "./icons/FlightIcon";

export type IconType =
  | "search"
  | "clock"
  | "date"
  | "score"
  | "flight"
  | "sort-asc"
  | "sort-desc"
  | "sort-unsorted";

interface IconContainerProps {
  icon: IconType;
  variant: "interactive" | "display" | "inactive";
  size: IconSize;
  className?: string;
}

const STYLING_BY_VARIANT = {
  inactive: "text-grey-storm",
  display: "text-evening-lilac",
  interactive: "text-afternoon-blue",
} as const;
export enum IconSize {
  small = 18,
  medium = 25,
  large = 40,
}

const ICON_MAP = new Map<IconType, React.FC<any>>([
  ["search", SearchIcon],
  ["clock", ClockIcon],
  ["score", ScoreIcon],
  ["date", CalendarIcon],
  ["flight", FlightIcon],
  ["sort-asc", SortAscIcon],
  ["sort-desc", SortDescIcon],
  ["sort-unsorted", SortUnsortedIcon],
]);

const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  variant,
  className,
  size,
}) => {
  const IconComponent = ICON_MAP.get(icon) ?? IconBroken;

  return (
    <i
      data-icon={icon}
      className={`${STYLING_BY_VARIANT[variant]} block ${className}`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <IconComponent></IconComponent>
    </i>
  );
};

export default IconContainer;
