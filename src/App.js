import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuctionCards from "./pages/AuctionCards/auction";
import MainPage from "./pages/Main/Main";
import Slot from "./pages/Slot/Slot";
import Footer from "./pages/Footer/footer";
import TopHeader from "./pages/Header/TopHeader";
import UISlot from "./pages/Slot/createSlot/createSlot";
import "./App.css";

const App = () => {
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/auction" element={<AuctionCards />} />
      </Routes>
      <UISlot />
      <Footer />
    </Router>
  );
};

export default App;
