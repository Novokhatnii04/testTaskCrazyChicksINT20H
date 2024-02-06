import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import Slot from "./pages/Slot/Slot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/slot" element={<Slot />} />
      </Routes>
    </Router>
  );
};

export default App;