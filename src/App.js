// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Simulateur from './components/Simulateur';
import GuideAchat from './components/GuideAchat';
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/guide" element={<GuideAchat />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
