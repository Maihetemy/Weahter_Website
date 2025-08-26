/* eslint-disable no-unused-vars */
import "./App.css";
import "./index.css";

import Home from "./Screens/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  );
}
export default App;
