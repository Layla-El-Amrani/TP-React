import React, { useEffect, useState } from 'react';

export default function ChargerDonnées() {
  const [products, setProducts] = useState([]);  // Liste des produits
  const [loading, setLoading] = useState(true);  // Indicateur de chargement
  const [error, setError] = useState(null);  // Erreur potentielle

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Remplacez par l'URL de l'API des produits
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Erreur lors du chargement des produits');
        }

        // Parsez la réponse JSON
        const data = await response.json();
        setProducts(data);  // Mettez à jour l'état avec les données des produits

      } catch (error) {
        setError(error.message);  // Gestion des erreurs
      } finally {
        setLoading(false);  // Fin du chargement
      }
    };

    fetchProducts();  // Appel de la fonction pour récupérer les produits
  }, []);  // L'effet se déclenche uniquement au chargement du composant

  // Affichage pendant le chargement
  if (loading) {
    return <div>Chargement des produits...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
  }

  // Affichage des produits
  return (
    <div>
      <h1>Produits disponibles</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: 10, width: 200 }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100%', height: 200, objectFit: 'cover' }} 
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
