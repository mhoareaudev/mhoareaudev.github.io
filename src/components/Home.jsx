// src/components/Home.jsx
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import GuideAchat from './GuideAchat';

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <h1>🎮 Bienvenue sur GPU Finder</h1>
          <p>
            Tu veux jouer sans lag ? Streamer sans faire chauffer ton PC ? Ou juste enfin comprendre ce que veulent dire RTX, VRAM et DLSS ?<br />
            Ici, on t'aide à choisir <strong>la carte graphique parfaite</strong> pour ton usage et ton budget.
          </p>
          <Link to="/simulateur" className="btn-start">Lancer le simulateur 🔍</Link>
        </div>
      </section>

      <GuideAchat />

    </>
  );
};

export default Home;
