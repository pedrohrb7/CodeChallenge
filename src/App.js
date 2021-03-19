import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
