import Home from "components/templates/home";
import { FlightsProvider } from "context/FlightsContext";

function App() {
  return (
    <FlightsProvider>
      <Home />
    </FlightsProvider>
  );
}

export default App;
