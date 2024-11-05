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
      className="bg-slate-100 text-schiphol-blue lg:border-2 lg:border-schiphol-blue px-4 py-2 rounded-md hover:bg-schiphol-blue hover:text-white transition-all duration-200 w-full text-left"
    >
      {children}
    </button>
  );
};

export default TextButton;
