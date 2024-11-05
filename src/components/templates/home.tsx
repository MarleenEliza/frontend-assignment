import AirportFinderSection from "components/organisms/AirportFinderSection";
import AirportResultSection from "components/organisms/AirtportResultSection";
import { useFlightsContext } from "context/FlightsContext";
import { useEffect } from "react";

export default function Home() {
  const { fetchFlights } = useFlightsContext();
  /**
   * Upon mouting app, fetch API
   */
  useEffect(() => {
    fetchFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <h1> Airport Finder</h1>
      <AirportFinderSection></AirportFinderSection>
      <AirportResultSection></AirportResultSection>
    </div>
  );
}
