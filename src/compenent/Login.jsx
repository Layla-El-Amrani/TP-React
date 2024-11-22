import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoi de la requête POST vers le serveur
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            console.log(response.data);
        } catch (err) {
            if (err.response) {
                // Afficher l'erreur si le serveur retourne une erreur
                seterror(err.response.data.error || 'Une erreur est survenue');
            } else {
                // Si la connexion échoue à cause d'un problème réseau
                seterror('Problème de connexion avec le serveur');
            }
        }
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <h2>Connexion</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label htmlFor="email">Entrez votre email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <label htmlFor="password">Entrez votre mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
