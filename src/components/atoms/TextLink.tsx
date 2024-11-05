import { ReactNode } from "react";

interface TextLinkProps {
  children: ReactNode;
  href: string;
  ariaLabel: string;
  target?: HTMLAnchorElement["target"];
}

const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  ariaLabel,
  target = "_blank",
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      className="underline"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default TextLink;
