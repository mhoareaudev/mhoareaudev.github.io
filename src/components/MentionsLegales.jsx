// src/components/MentionsLegales.jsx
import React from 'react';
import '../App.css';

const MentionsLegales = () => {
  return (
    <section className="mentions-legales">
      <div className="container">
        <h2>Mentions Légales</h2>

        <h3>Éditeur du site</h3>
        <p>
          Le site <strong>GPU Finder</strong> est édité par Matthieu Hoareau, développeur indépendant, dans le cadre d’un projet pédagogique.
          <br />
          Contact : <a href="mailto:matthieu.hoareau32@gmail.com">matthieu.hoareau32@gmail.com</a>
        </p>

        <h3>Hébergement</h3>
        <p>
          Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
          340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">www.vercel.com</a>
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          Tous les éléments présents sur le site (textes, images, logos, graphismes, structure, etc.) sont protégés par le droit d’auteur
          et sont la propriété exclusive de GPU Finder ou de ses partenaires. Toute reproduction, diffusion ou modification est interdite sans autorisation.
        </p>

        <h3>Responsabilité</h3>
        <p>
          Les informations présentes sur le site sont fournies à titre indicatif. GPU Finder ne saurait garantir l’exactitude, la complétude ou l’actualité des informations diffusées. 
          L’utilisateur est seul responsable de l’usage qu’il en fait.
        </p>

        <h3>Liens affiliés</h3>
        <p>
          Certains liens sur ce site sont des <strong>liens affiliés Amazon Partenaires</strong> : cela signifie que nous percevons une commission
          si vous achetez un produit via ces liens, sans coût supplémentaire pour vous.
          <br />
          <em>GPU Finder n’est pas responsable des conditions de vente, délais de livraison ou SAV proposés par Amazon.</em>
        </p>

        <h3>Protection des données personnelles</h3>
        <p>
          Ce site ne collecte aucune donnée personnelle à des fins commerciales. Aucune inscription ou création de compte n’est demandée.
          Si un formulaire devait être ajouté à l’avenir (simulateur, contact...), les données saisies ne seront ni stockées ni revendues.
          <br />
          Pour toute demande de rectification ou suppression de données, vous pouvez écrire à : <a href="mailto:matthieu.hoareau32@gmail.com">matthieu.hoareau32@gmail.com</a>
        </p>

        <h3>Cookies</h3>
        <p>
          Le site peut utiliser des cookies à des fins de mesure d’audience via Google Analytics ou équivalent. Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
        </p>

        <h3>Droit applicable</h3>
        <p>
          Le site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>

        <h3>Contact</h3>
        <p>
          Pour toute question, vous pouvez nous écrire à : <a href="mailto:matthieu.hoareau32@gmail.com">matthieu.hoareau32@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default MentionsLegales;
