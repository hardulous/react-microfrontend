import React from "react";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div id="host">
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
