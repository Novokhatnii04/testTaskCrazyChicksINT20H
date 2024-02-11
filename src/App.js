import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuctionCards from "./pages/AuctionCards/auction";
import MainPage from "./pages/Main/Main";
import Slot from "./pages/Slot/Slot";
import Footer from "./pages/Footer/footer";
import TopHeader from "./pages/Header/TopHeader";
import UISlot from "./pages/Slot/createSlot/createSlot";
import ScrollToTop from './Hooks/scroll/scroll';
import { Provider } from 'react-redux'; // Імпорт Provider з react-redux
import store from './Components/Store/store'; // Імпорт вашого Redux store
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <TopHeader />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/auction" element={<AuctionCards />} />
          <Route path="/createslot" element={<UISlot />} />
          <Route path="/slot/:id" element={<Slot />} />
          <Route path="/question" element={<MainPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
