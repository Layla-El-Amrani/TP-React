import React, { useState } from "react";
import "./style/gestionuser.css"; // Importation du fichier CSS

export default function GestionUser() {
  const [users, setUsers] = useState([
    { id: 1, nom: "John Doe", email: "johndoe@example.com", dateNaissance: "1990-01-01", genre: "Homme", image: "" },
    { id: 2, nom: "Jane Smith", email: "janesmith@example.com", dateNaissance: "1985-05-15", genre: "Femme", image: "" },
    { id: 3, nom: "Alice Johnson", email: "alicej@example.com", dateNaissance: "2000-07-20", genre: "Femme", image: "" },
    { id: 4, nom: "Bob Brown", email: "bobbrown@example.com", dateNaissance: "1992-11-10", genre: "Homme", image: "" },
  ]);

  const [valueInput, setValueInput] = useState({
    id: '',
    nom: '',
    email: '',
    dateNaissance: '',
    genre: '',
    image: ''
  });

 const [showtable,setshowtable]=useState(true)
 const [showform,setshowform]=useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setValueInput({
      ...valueInput,
      image: URL.createObjectURL(file)
    });
  };

  const handleRemove = (id) => {
    const userUpdate = users.filter(user => user.id !== id);
    setUsers(userUpdate);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newUser = { ...valueInput, id: users.length + 1 }; // Crée un nouvel ID pour l'utilisateur
    setUsers([...users, newUser]);
    setValueInput({
      id: '',
      nom: '',
      email: '',
      dateNaissance: '',
      genre: '',
      image: ''
    });
    setshowform(false)
    setshowtable(true)
 
  };

  return (
    <div className="container">
        <button className="button" onClick={()=>{
            setshowform(!showform)
            setshowtable(!showtable) 
        }}>{showform ? 'Reuteur':'add user'}</button>

      {showform && (
        <form className="form" onSubmit={handleAdd}>
          <h1 className="form-title">Ajouter un utilisateur</h1>

          <label className="label">Nom</label>
          <input
            className="input"
            type="text"
            name="nom"
            value={valueInput.nom}
            onChange={handleChange}
          />

          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={valueInput.email}
            onChange={handleChange}
          />

          <label className="label">Date de naissance</label>
          <input
            className="input"
            type="date"
            name="dateNaissance"
            value={valueInput.dateNaissance}
            onChange={handleChange}
          />

          <label className="label">Genre</label>
          <div className="radio-wrapper">
            <input
              className="radio-input"
              type="radio"
              name="genre"
              value="Homme"
              checked={valueInput.genre === 'Homme'}
              onChange={handleChange}
            />
            Homme
            <input
              className="radio-input"
              type="radio"
              name="genre"
              value="Femme"
              checked={valueInput.genre === 'Femme'}
              onChange={handleChange}
            />
            Femme
          </div>

          <label className="label">Image</label>
          <input
            className="file-input"
            type="file"
            name="image"
            onChange={handleImageChange}
          />

          <button className="button" type="submit">Ajouter</button>
        </form>
      )}

      {/* Affichage conditionnel du tableau */}
      {showtable && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Date de naissance</th>
              <th>Genre</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.dateNaissance}</td>
                <td>{user.genre}</td>
                <td>
                  {user.image && (
                    <img src={user.image} alt="Profile" />
                  )}
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleRemove(user.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
