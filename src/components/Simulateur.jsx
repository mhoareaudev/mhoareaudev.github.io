// src/components/Simulateur.jsx
import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "Quel est ton budget maximal ?",
    options: [
      { label: "Moins de 350€", gpu: "RTX 3050" },
      { label: "350€ - 600€", gpu: "RTX 4060 Ti" },
      { label: "Plus de 600€", gpu: "RTX 4070 Super" },
    ],
  },
  {
    id: 2,
    question: "Quelle est la résolution de ton écran principal ?",
    options: [
      { label: "1080p (Full HD)", gpu: "RTX 4060" },
      { label: "1440p (QHD)", gpu: "RTX 4070" },
      { label: "4K (UHD)", gpu: "RTX 4080" },
    ],
  },
  {
    id: 3,
    question: "Quel type de jeux joues-tu le plus souvent ?",
    options: [
      { label: "Jeux compétitifs (FPS, MOBA)", gpu: "RTX 4060" },
      { label: "Jeux solo AAA, graphismes immersifs", gpu: "RTX 4070 Ti" },
      { label: "Réalité virtuelle, simulation", gpu: "RTX 4080" },
    ],
  },
];

const gpuData = {
  "RTX 3050": {
    image: "/images/rtx3050.jpg",
    lien: "https://www.amazon.fr/dp/B09RJSP5J2",
  },
  "RTX 4060": {
    image: "/images/rtx4060.jpg",
    lien: "https://www.amazon.fr/dp/B0C7J4Z2YF",
  },
  "RTX 4060 Ti": {
    image: "/images/rtx4060ti.jpg",
    lien: "https://www.amazon.fr/dp/B0C9DP9D2T",
  },
  "RTX 4070": {
    image: "/images/rtx4070.jpg",
    lien: "https://www.amazon.fr/dp/B0C1KD7K1G",
  },
  "RTX 4070 Super": {
    image: "/images/rtx4070super.jpg",
    lien: "https://www.amazon.fr/dp/B0CTQ8BX2Z",
  },
  "RTX 4070 Ti": {
    image: "/images/rtx4070ti.jpg",
    lien: "https://www.amazon.fr/dp/B0BSFBN1H7",
  },
  "RTX 4080": {
    image: "/images/rtx4080.jpg",
    lien: "https://www.amazon.fr/dp/B0BNNSBRHF",
  },
};

const Simulateur = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const current = questions[step];

  const handleSelect = (gpuName) => {
    setAnswers((prev) => [...prev, gpuName]);
    setStep((prev) => prev + 1);
  };

  const getRecommendedGPU = () => {
    const freq = answers.reduce((acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
  };

  const recommended = step >= questions.length ? getRecommendedGPU() : null;

  return (
    <section className="simulateur" id="simulateur-form">
      {step < questions.length ? (
        <div className="simulateur-wrapper">
          <div className="question-block">
            <h3>{current.question}</h3>
            <div className="options">
              {current.options.map((opt, idx) => (
                <button key={idx} onClick={() => handleSelect(opt.gpu)}>{opt.label}</button>
              ))}
            </div>
          </div>

          <motion.div
            className="image-block"
            key={current.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img src={gpuData[current.options[0].gpu].image} alt="Carte graphique" />
            <p>{current.options[0].gpu}</p>
          </motion.div>
        </div>
      ) : (
        <div className="result">
          <h3>Carte recommandée :</h3>
          <motion.img
            key={recommended}
            src={gpuData[recommended].image}
            alt={recommended}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
          <p className="result-name">{recommended}</p>
          <a
            href={gpuData[recommended].lien}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-acheter"
          >
            Voir sur Amazon
          </a>
        </div>
      )}
    </section>
  );
};

export default Simulateur;
