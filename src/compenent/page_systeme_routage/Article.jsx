import React from 'react'
import { BrowserRouter as Router ,Link, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export default function Article() {
    const location = useLocation()
    
   // Tableau d'articles avec des informations fictives
  const articles = [
    { id: 1, titre: "Article 1", description: "Description de l'article 1", prix: 10 },
    { id: 2, titre: "Article 2", description: "Description de l'article 2", prix: 20 },
    { id: 3, titre: "Article 3", description: "Description de l'article 3", prix: 30 },
    { id: 4, titre: "Article 4", description: "Description de l'article 4", prix: 40 }
  ];
  return (
    <div>
      <h1>page article</h1>
      <p><strong>chemin actuel :{location.pathname}</strong></p>
      {articles.map(article=>(
        <ol>
            <li>{article.id}</li>
            <li>{article.titre}</li>
            <li>{article.description}</li>
            <li>{article.prix}</li>
            <Link to={`/article/${article.id}`}>Detail article</Link>
        </ol>

      ))}
    </div>
  )
}

