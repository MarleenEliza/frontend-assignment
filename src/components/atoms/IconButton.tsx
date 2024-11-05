import { MouseEventHandler } from "react";
import IconContainer, {
  IconSize,
  IconType,
} from "components/atoms/IconContainer";

interface IconButtonProps {
  icon: IconType;
  variant: "interactive" | "display";
  ariaLabel: string;
  size: IconSize;
  clickFunction: MouseEventHandler<HTMLButtonElement>;
  type: HTMLButtonElement["type"];
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant,
  ariaLabel,
  clickFunction,
  size,
  type,
}) => {
  return (
    <button
      type={type as any}
      aria-label={ariaLabel}
      onClick={clickFunction}
      className={`icon-button ${variant}`}
    >
      <IconContainer icon={icon} size={size} variant={variant}></IconContainer>
    </button>
  );
};

export default IconButton;
