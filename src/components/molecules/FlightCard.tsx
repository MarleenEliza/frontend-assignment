import DisplayParagraph from "components/atoms/DisplayParagraph";
import TextLink from "components/atoms/TextLink";
import { Flight } from "types/flightsApiTypes";

interface FlightCardProps extends Flight {}

const FlightCard: React.FC<FlightCardProps> = ({
  flightNumber,
  date,
  expectedTime,
  originalTime,
  url,
  score,
}) => {
  return (
    <li className="flight-card bg-white/85 p-4 grid grid-cols-[40%_60%] rounded-2xl items-center border-2 border-lightmorning-blue lg:grid-cols-[20%_80%] lg:p-8">
      <TextLink href={url} ariaLabel={`Flight details for ${flightNumber}`}>
        <h3 className="flight-number font-bold text-2xl lg:text-4xl text-morning-pink">
          {flightNumber}
        </h3>
      </TextLink>
      <div className="lg:text-lg">
        <DisplayParagraph icon="date">{date}</DisplayParagraph>
        <DisplayParagraph icon="clock">
          {expectedTime} (expected)
        </DisplayParagraph>
        <DisplayParagraph icon="clock">
          {originalTime} (original)
        </DisplayParagraph>
        <DisplayParagraph icon="score">
          {" "}
          {Math.round(Number(score))}
        </DisplayParagraph>
      </div>
    </li>
  );
};

export default FlightCard;
