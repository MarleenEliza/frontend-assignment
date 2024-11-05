import { ReactNode, MouseEventHandler } from "react";

interface TextButtonProps {
  ariaLabel: string;
  clickFunction: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type: HTMLButtonElement["type"];
}

const TextButton: React.FC<TextButtonProps> = ({
  ariaLabel,
  clickFunction,
  children,
  type,
}) => {
  return (
    <button
      type={type as any}
      aria-label={ariaLabel}
      onClick={clickFunction}
      className="bg-white text-schiphol-blue"
    >
      {children}
    </button>
  );
};

export default TextButton;
