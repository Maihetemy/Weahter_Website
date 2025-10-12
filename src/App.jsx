/* eslint-disable no-unused-vars */
import "./App.css";
import { WeatherAndCityProvider } from "./Context/CityContext";
import "./index.css";

import Home from "./Screens/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <WeatherAndCityProvider>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </WeatherAndCityProvider>
  );
}
export default App;
