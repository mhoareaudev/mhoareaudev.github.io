// src/components/GuideAchat.jsx
import React from 'react';
import '../App.css';
import Produits from './Produits';
import { Link } from 'react-router-dom';

const GuideAchat = () => {
  return (
    <section className="guide-main" id="guide">
      <div className="guide-header">
        <h2>Comment choisir sa carte graphique</h2>
        <p>
          Aussi appelée <strong>carte vidéo</strong>, la carte graphique est un composant du PC dédié principalement aux <strong>jeux vidéo</strong>, à la <strong>3D</strong>, au <strong>montage vidéo</strong> et à la <strong>réalité virtuelle</strong>.
        </p>
        <p>
          👉 <strong>Tu fais que de la bureautique ?</strong> Alors une carte graphique dédiée n’est pas indispensable. Mais si tu veux <strong>jouer sans galérer sur les FPS</strong>, <strong>streamer</strong>, <strong>faire du montage</strong>, ou juste <strong>kiffer Cyberpunk avec ray tracing</strong>, là, il te faut une vraie carte graphique. On t’explique tout, simplement.
        </p>
      </div>

      <div className="guide-section bloc-image-left" id="tech">
        <div className="text">
          <h3>La fiche technique d’une carte graphique</h3>
          <p>
            Une carte graphique, c’est pas juste un gros bout de plastique avec des LED. Elle est composée de plusieurs éléments clés :
          </p>
          <ul>
            <li><strong>GPU (Graphics Processing Unit)</strong> : le cerveau de la carte, il calcule tout ce que tu vois à l’écran.</li>
            <li><strong>VRAM (mémoire vidéo)</strong> : elle stocke temporairement les textures, ombres, et données graphiques pendant que tu joues. Plus y’en a, mieux c’est (8 Go = très bon début).</li>
            <li><strong>Refroidissement</strong> : aircooling, double ventilateur, chambre à vapeur, etc. Plus ta carte chauffe, plus elle a besoin de rester cool.</li>
          </ul>
          <p>
            👉 Tu veux vraiment capter les différences entre les modèles ? Consulte notre <a href="#caracteristiques">guide complet des caractéristiques techniques</a>.
          </p>
        </div>
        <img src="/images/geforce-gigabyte.jpg" alt="Carte graphique RTX Gigabyte" />
      </div>

      <div className="guide-section bloc-image-right" id="usages">
        <img src="/images/carte_msi_suprim.jpg" alt="Carte MSI Suprim" />
        <div className="text">
          <h3>Une carte graphique pour quel usage ?</h3>
          <p>Choisis ta carte selon ton style :</p>
          <ul>
            <li>🎬 <strong>Multimédia</strong> : regarder des vidéos, Netflix, YouTube en 4K ? Une carte basique suffit (ex : GT 1030, iGPU AMD).</li>
            <li>🎮 <strong>Gamer “cool”</strong> : si tu joues à LoL, Fortnite, CS2 en 1080p, une RTX 4060 ou RX 7600 est déjà très bien.</li>
            <li>🧠 <strong>Gamer exigeant</strong> : pour du 1440p ultra avec Ray Tracing, vise une RTX 4070 / RX 7800 XT minimum.</li>
            <li>🤯 <strong>4K & VR</strong> : t’as un écran de fou ? RTX 4080 / 4090 obligatoire.</li>
          </ul>
          <p>
            ➕ Tu veux plus de détails selon les usages ? Va voir notre <a href="#usages-detail">guide complet</a>.
          </p>
          <div className="gpu-buttons">
            <button>1080p FHD</button>
            <button>1440p QHD</button>
            <button>4K UHD</button>
          </div>
        </div>
      </div>

      {/* 🔻 SECTION PRODUITS */}
      <Produits />

      {/* 🔻 SECTION BUDGET */}
      <div className="guide-section bloc-image-left" id="budget">
        <div className="text">
          <h3>Quel budget ?</h3>
          <p>Le choix de ta carte graphique dépend aussi de ton portefeuille :</p>
          <ul>
            <li><strong>Entrée de gamme (- de 350 €)</strong> : du Full HD avec des réglages bas, sans trop de bruit ni chaleur.</li>
            <li><strong>Milieu de gamme (350 € à 600 €)</strong> : parfait pour jouer en 1080p/1440p avec de beaux réglages.</li>
            <li><strong>Haut de gamme (+ de 600 €)</strong> : tu veux tout en ultra, Ray Tracing et le silence ? C’est là que ça se passe.</li>
          </ul>
          <p>
            🔍 Pour plus d’infos, consulte notre guide des <a href="#gammes">gammes de prix des cartes graphiques</a>.
          </p>
          <div className="gpu-buttons">
            <button>- de 350 €</button>
            <button>350 € à 600 €</button>
            <button>+ de 600 €</button>
          </div>
        </div>
        <img src="/images/geforce-budget.jpg" alt="Carte graphique entrée de gamme" />
      </div>

      {/* 🔻 SECTION SIMULATEUR */}
      <div className="guide-section bloc-image-right" id="simulateur">
        <img src="/images/geforce-simulateur.jpg" alt="Montage PC RTX" />
        <div className="text">
          <h3>Le simulateur</h3>
          <p>
            Tu veux un coup de main pour choisir la carte parfaite ? Remplis notre petit formulaire, et on te recommande la meilleure carte selon :
          </p>
          <ul>
            <li>✅ Ton budget</li>
            <li>✅ Ta résolution d’écran</li>
            <li>✅ Le type de jeux que tu préfères</li>
          </ul>
          <p> <br></br>
            <Link to="/simulateur" className="btn-start">Lancer le simulateur 🔍</Link>
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default GuideAchat;
