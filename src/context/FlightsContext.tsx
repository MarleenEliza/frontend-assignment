import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Flight, GetFlightsResponse } from "@/types/flightsApiTypes";

/**
 * Context for Flights.
 * - can set or remove chosen airport as string.
 * - can fetch data of flights.json which will be treated as a mock API.
 * - can return filtered flight data based on user input airport.
 * - can sort data of fetched flights by date or estiamted time. (either asc or desc)
 */
interface FlightsContextType {
  flightResults: Flight[];
  searchResults: Flight[];
  chosenAirport: string | null;
  setChosenAirport: (airport: string) => void;
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
export const FlightsContext = createContext<FlightsContextType | undefined>(
  undefined
);

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
  const [searchResults, setSearchResults] = useState<Flight[]>([]);
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
  }, [chosenAirport, flights]);

  /**
   * Filter flights based on search input
   */
  useEffect(() => {
    if (searchInput.length >= 3) {
      const filtered = flights.filter((flight) =>
        flight.airport.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(filtered);
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
