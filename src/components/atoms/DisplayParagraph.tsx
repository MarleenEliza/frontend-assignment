import IconContainer, { IconSize, IconType } from "./IconContainer";

type DisplayParagraphProps = {
  icon: IconType;
  children: React.ReactNode;
};

const DisplayParagraph: React.FC<DisplayParagraphProps> = ({
  children,
  icon,
}) => {
  return (
    <p className="flight-details flex gap-2 items-center">
      <IconContainer
        size={IconSize.small}
        variant="display"
        icon={icon}
      ></IconContainer>
      {children}
    </p>
  );
};

export default DisplayParagraph;
