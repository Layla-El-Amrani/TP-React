// src/components/PageNotFound.js
import React from 'react';

function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <a href="/" style={{ textDecoration: 'underline' }}>Retour à la page d'accueil</a>
    </div>
  );
}

export default PageNotFound;
