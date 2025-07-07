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
          
          {/* Routes des services */}
          <Route path="/urgences/ouverture-porte-claquee" element={<ServicePage type="ouverture-porte" />} />
          <Route path="/urgences/serrure-bloquee-clef-cassee" element={<ServicePage type="serrure-bloquee" />} />
          <Route path="/urgences/perte-cles" element={<ServicePage type="perte-cles" />} />
          <Route path="/urgences/apres-cambriolage" element={<ServicePage type="apres-cambriolage" />} />
          
          {/* Routes des 40 villes du Var */}
          {/* Première vague - 15 villes prioritaires */}
          <Route path="/zones/serrurier-toulon" element={<LocalPage city="toulon" />} />
          <Route path="/zones/serrurier-la-seyne-sur-mer" element={<LocalPage city="la-seyne-sur-mer" />} />
          <Route path="/zones/serrurier-hyeres" element={<LocalPage city="hyeres" />} />
          <Route path="/zones/serrurier-frejus" element={<LocalPage city="frejus" />} />
          <Route path="/zones/serrurier-draguignan" element={<LocalPage city="draguignan" />} />
          <Route path="/zones/serrurier-saint-raphael" element={<LocalPage city="saint-raphael" />} />
          <Route path="/zones/serrurier-brignoles" element={<LocalPage city="brignoles" />} />
          <Route path="/zones/serrurier-six-fours-les-plages" element={<LocalPage city="six-fours-les-plages" />} />
          <Route path="/zones/serrurier-la-garde" element={<LocalPage city="la-garde" />} />
          <Route path="/zones/serrurier-la-valette-du-var" element={<LocalPage city="la-valette-du-var" />} />
          <Route path="/zones/serrurier-saint-maximin-la-sainte-baume" element={<LocalPage city="saint-maximin-la-sainte-baume" />} />
          <Route path="/zones/serrurier-sanary-sur-mer" element={<LocalPage city="sanary-sur-mer" />} />
          <Route path="/zones/serrurier-sainte-maxime" element={<LocalPage city="sainte-maxime" />} />
          <Route path="/zones/serrurier-roquebrune-sur-argens" element={<LocalPage city="roquebrune-sur-argens" />} />
          <Route path="/zones/serrurier-ollioules" element={<LocalPage city="ollioules" />} />
          
          {/* Deuxième vague - 25 villes restantes */}
          <Route path="/zones/serrurier-cogolin" element={<LocalPage city="cogolin" />} />
          <Route path="/zones/serrurier-saint-cyr-sur-mer" element={<LocalPage city="saint-cyr-sur-mer" />} />
          <Route path="/zones/serrurier-le-pradet" element={<LocalPage city="le-pradet" />} />
          <Route path="/zones/serrurier-la-crau" element={<LocalPage city="la-crau" />} />
          <Route path="/zones/serrurier-cuers" element={<LocalPage city="cuers" />} />
          <Route path="/zones/serrurier-vidauban" element={<LocalPage city="vidauban" />} />
          <Route path="/zones/serrurier-sollies-pont" element={<LocalPage city="sollies-pont" />} />
          <Route path="/zones/serrurier-bormes-les-mimosas" element={<LocalPage city="bormes-les-mimosas" />} />
          <Route path="/zones/serrurier-bandol" element={<LocalPage city="bandol" />} />
          <Route path="/zones/serrurier-le-beausset" element={<LocalPage city="le-beausset" />} />
          <Route path="/zones/serrurier-carqueiranne" element={<LocalPage city="carqueiranne" />} />
          <Route path="/zones/serrurier-fayence" element={<LocalPage city="fayence" />} />
          <Route path="/zones/serrurier-la-londe-les-maures" element={<LocalPage city="la-londe-les-maures" />} />
          <Route path="/zones/serrurier-le-muy" element={<LocalPage city="le-muy" />} />
          <Route path="/zones/serrurier-saint-tropez" element={<LocalPage city="saint-tropez" />} />
          <Route path="/zones/serrurier-lorgues" element={<LocalPage city="lorgues" />} />
          <Route path="/zones/serrurier-pierrefeu-du-var" element={<LocalPage city="pierrefeu-du-var" />} />
          <Route path="/zones/serrurier-le-luc" element={<LocalPage city="le-luc" />} />
          <Route path="/zones/serrurier-gareoult" element={<LocalPage city="gareoult" />} />
          <Route path="/zones/serrurier-grimaud" element={<LocalPage city="grimaud" />} />
          <Route path="/zones/serrurier-la-motte" element={<LocalPage city="la-motte" />} />
          <Route path="/zones/serrurier-puget-sur-argens" element={<LocalPage city="puget-sur-argens" />} />
          <Route path="/zones/serrurier-carnoules" element={<LocalPage city="carnoules" />} />
          <Route path="/zones/serrurier-gonfaron" element={<LocalPage city="gonfaron" />} />
          <Route path="/zones/serrurier-cavalaire-sur-mer" element={<LocalPage city="cavalaire-sur-mer" />} />
          
        </Routes>
        <FloatingCallButton />
      </BrowserRouter>
    </div>
  );
}

export default App;