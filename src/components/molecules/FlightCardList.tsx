import { Flight } from "types/flightsApiTypes";
import FlightCard from "components/molecules/FlightCard";

interface FlightCardListProps {
  flights: Flight[];
}

const FlightCardList: React.FC<FlightCardListProps> = ({ flights }) => {
  return (
    <ul className="grid gap-2 h-full mt-4 lg:gap-6">
      {flights.map((flight) => (
        <FlightCard key={flight.flightIdentifier} {...flight} />
      ))}
    </ul>
  );
};

export default FlightCardList;
