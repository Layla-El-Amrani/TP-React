    import React, { useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom'; // Importer le hook useNavigate

    export default function Login() {
        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');
        const [error, seterror] = useState('');
        const navigate = useNavigate(); // Utiliser le hook pour la redirection

        const handlesubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3000/api/signup', { email, password });
                console.log(response.data);
                
                // Si la connexion est réussie, redirige l'utilisateur vers la page d'accueil ou une autre page
                navigate('/ToDoList'); // Par exemple, redirige vers le tableau de bord
            } catch (err) {
                if (err.response) {
                    seterror(err.response.data.error || 'Une erreur est survenue');
                } else {
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
