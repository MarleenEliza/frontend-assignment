import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Flight, GetFlightsResponse } from "types/flightsApiTypes";

/**
 * Context for Flights.
 * - can set or remove chosen airport as string.
 * - can fetch data of flights.json which will be treated as a mock API.
 * - can return filtered flight data based on user input airport.
 * - can sort data of fetched flights by date or estimated time. (either asc or desc)
 */
interface FlightsContextType {
  flightResults: Flight[];
  searchResults: string[];
  chosenAirport: string | null;
  setChosenAirport: (airport: string) => void;
  searchInput: string;
  setSearchInput: (input: string) => void;
  sortFlightResults: (
    sortBy: "date" | "expectedTime",
    order: "asc" | "desc"
  ) => void;
  fetchFlights: () => Promise<void>;
}

/**
 * Context
 */
const FlightsContext = createContext<FlightsContextType | undefined>(undefined);

/**
 * Provider
 */
interface FlightsProviderProps {
  children: ReactNode;
}

export const FlightsProvider: React.FC<FlightsProviderProps> = ({
  children,
}) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [flightResults, setFlightResults] = useState<Flight[]>([]);
  const [chosenAirport, setChosenAirport] = useState<string | null>(null);

  /**
   * fetch all flight data from API
   */
  const fetchFlights = async () => {
    try {
      const response = await fetch("/data/flights.json");
      const data: GetFlightsResponse = await response.json();
      setFlights(data.flights);
      console.log("successfully updated flights");
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  /**
   * Filter flights based on chosenAirport
   */
  useEffect(() => {
    const filtered = flights.filter(
      (flight) => flight.airport === chosenAirport
    );
    setFlightResults(filtered);
    console.log("updated flightResults");
  }, [chosenAirport, flights]);

  /**
   * Filter flights based on search input and get unique airports
   */
  useEffect(() => {
    console.log(`filter flights based on the following input: ${searchInput}`);

    if (searchInput.length >= 3) {
      const filteredAirports = flights
        .filter((flight) =>
          flight.airport.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((flight) => flight.airport);

      // Set unique airports
      const uniqueAirports = Array.from(new Set(filteredAirports));
      setSearchResults(uniqueAirports);
    } else {
      setSearchResults([]);
    }
  }, [searchInput, flights]);

  /**
   * sort flight results
   */
  const sortFlightResults = (
    sortBy: "date" | "expectedTime",
    order: "asc" | "desc"
  ) => {
    const sortedFlights = [...flightResults].sort((a, b) => {
      const valueA =
        sortBy === "date"
          ? new Date(a.date).getTime()
          : new Date(`1970-01-01T${a.expectedTime}`).getTime();
      const valueB =
        sortBy === "date"
          ? new Date(b.date).getTime()
          : new Date(`1970-01-01T${b.expectedTime}`).getTime();

      return (valueA - valueB) * (order === "asc" ? 1 : -1);
    });

    setFlightResults(sortedFlights);
  };

  return (
    <FlightsContext.Provider
      value={{
        flightResults,
        searchResults,
        searchInput,
        setChosenAirport,
        chosenAirport,
        setSearchInput,
        sortFlightResults,
        fetchFlights,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

/**
 * Hook for easier access
 */
export const useFlightsContext = () => {
  const context = useContext(FlightsContext);
  if (context === undefined) {
    throw new Error("useFlightsContext must be used within a FlightsProvider");
  }
  return context;
};
