import React from "react";
// import { User } from "./components/user";
// import './App.css'
// import SearchMeal from "./components/search-meals";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import FetchtopQuotes from "./components/quote";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer/>
          <FetchtopQuotes/>
        
      </QueryClientProvider>
       
    </>
  );
}

export default App;
