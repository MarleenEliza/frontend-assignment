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
    <div className=" bg-gradient-flights lg:text-lg">
      <div className="flex flex-col min-h-screen bg-white/70 py-6">
        <h1 className="text-4xl text-afternoon-blue font-bold my-4 ml-10 lg:text-6xl lg:mb-12">
          Airport Finder
        </h1>
        <AirportFinderSection></AirportFinderSection>
        <div className="h-[1px] bg-grey-storm w-[80%] lg:w-full my-6 mx-auto"></div>
        <AirportResultSection></AirportResultSection>
      </div>
    </div>
  );
}
