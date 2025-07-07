import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import LocalPage from "./pages/LocalPage";

// Components
import Header from "./components/Header";
import FloatingCallButton from "./components/FloatingCallButton";
import SchemaMarkup from "./components/SchemaMarkup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SchemaMarkup />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urgences/ouverture-porte-claquee" element={<ServicePage type="ouverture-porte" />} />
          <Route path="/urgences/serrure-bloquee-clef-cassee" element={<ServicePage type="serrure-bloquee" />} />
          <Route path="/urgences/perte-cles" element={<ServicePage type="perte-cles" />} />
          <Route path="/urgences/apres-cambriolage" element={<ServicePage type="apres-cambriolage" />} />
          <Route path="/zones/serrurier-toulon" element={<LocalPage city="toulon" />} />
          <Route path="/zones/serrurier-frejus" element={<LocalPage city="frejus" />} />
          <Route path="/zones/serrurier-draguignan" element={<LocalPage city="draguignan" />} />
          <Route path="/zones/serrurier-hyeres" element={<LocalPage city="hyeres" />} />
          <Route path="/zones/serrurier-la-seyne" element={<LocalPage city="la-seyne" />} />
        </Routes>
        <FloatingCallButton />
      </BrowserRouter>
    </div>
  );
}

export default App;