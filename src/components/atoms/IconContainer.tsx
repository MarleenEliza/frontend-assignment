import SearchIcon from "./icons/SearchIcon";
import ClockIcon from "./icons/ClockIcon";
import IconBroken from "./icons/IconBroken";

export type IconType =
  | "search"
  | "clock"
  | "date"
  | "score"
  | "sort-asc"
  | "sort-desc"
  | "sort-unsorted";

interface IconContainerProps {
  icon: IconType;
  variant: "interactive" | "display";
  size: IconSize;
}

export enum IconSize {
  small = 18,
  medium = 25,
}

const ICON_MAP = new Map<IconType, React.FC<any>>([
  ["search", SearchIcon],
  ["clock", ClockIcon],
  ["score", ClockIcon],
  ["date", ClockIcon],
]);

const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  variant,
  size,
}) => {
  const IconComponent = ICON_MAP.get(icon) ?? IconBroken;

  return (
    <i
      data-icon={icon}
      className="block"
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
