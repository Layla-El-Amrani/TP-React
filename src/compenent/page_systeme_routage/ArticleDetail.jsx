import React from 'react'
import { useParams } from 'react-router-dom'


export default function ArticleDetail() {
     // Tableau d'articles avec des informations fictives
  const articles = [
    { id: 1, titre: 'Article 1', description: 'Description de l\'article 1', prix: 10 },
    { id: 2, titre: 'Article 2', description: 'Description de l\'article 2', prix: 20 },
    { id: 3, titre: 'Article 3', description: 'Description de l\'article 3', prix: 30 },
    { id: 4, titre: 'Article 4', description: 'Description de l\'article 4', prix: 40 }
  ];

    const {id} =useParams()
    const article =articles.find((article)=>article.id ===parseInt(id,10))
  return (
    <div>
        <h1>Page detail article</h1>
        <h2>{article.titre}</h2>
        <p>{article.description}</p>
        <p>{article.prix}</p>
      
    </div>
  )
}
