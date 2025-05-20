// src/components/Produits.jsx
import React from 'react';
import '../App.css';

const produits = [
  {
    nom: 'NVIDIA GeForce RTX 4060',
    image: 'https://media.ldlc.com/r1600/ld/products/00/06/04/54/LD0006045467.jpg',
    lien: 'https://www.amazon.fr/dp/B0C7J4Z2YF?tag=tonid-21',
    description: 'Excellentes performances en Full HD avec un tarif abordable.',
  },
  {
    nom: 'NVIDIA GeForce RTX 5070 Ti',
    image: 'https://media.ldlc.com/r1600/ld/products/00/06/21/18/LD0006211847.jpg',
    lien: 'https://www.amazon.fr/dp/B0C7J4Z2YF?tag=tonid-21',
    description: 'Idéale pour le gaming en 4K avec DLSS 4.',
  },
  {
    nom: 'AMD Radeon RX 9070 XT',
    image: 'https://media.ldlc.com/r1600/ld/products/00/06/22/02/LD0006220229.jpg',
    lien: 'https://www.amazon.fr/dp/B0C7J4Z2YF?tag=tonid-21',
    description: 'Excellent rapport performance/prix avec FSR4.',
  },
];

const Produits = () => (
  <section className="produits-section" id="produits">
    <h2>Nos dernières recommandations</h2>
    <div className="produits-grid">
      {produits.map((produit, index) => (
        <div className="produit-card" key={index}>
          <img src={produit.image} alt={produit.nom} />
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p>
          <a href={produit.lien} target="_blank" rel="noopener noreferrer" className="btn-acheter">
            Voir sur Amazon
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Produits;
