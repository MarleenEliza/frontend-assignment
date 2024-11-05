import { Flight } from "types/flightsApiTypes";

interface FlightCardProps extends Flight {}

const FlightCard: React.FC<FlightCardProps> = ({
  flightNumber,
  airport,
  date,
  expectedTime,
  originalTime,
  url,
  score,
}) => {
  return (
    <li className="flight-card bg-slate-300 text-schiphol-blue p-4">
      <a
        href={url}
        aria-label={`Flight details for ${flightNumber}`}
        className="flight-card-link"
      >
        <h3 className="flight-number">{flightNumber}</h3>
        <p className="flight-details">
          <strong>Airport:</strong> {airport}
        </p>
        <p className="flight-details">
          <strong>Date:</strong> {date}
        </p>
        <p className="flight-details">
          <strong>Expected Time:</strong> {expectedTime}
        </p>
        <p className="flight-details">
          <strong>Original Time:</strong> {originalTime}
        </p>
        <p className="flight-details">
          <strong>Score:</strong> {score}
        </p>
      </a>
    </li>
  );
};

export default FlightCard;
