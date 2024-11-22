import React, { useState } from "react";
import './style/Form.css'; // Assurez-vous que le chemin vers form.css est correct

export default function Form() {
  const [inputValue, SetInputValue] = useState({
    Nom: "",
    Email: "",
    MotDePasse: "",
    Sexe: "",
    Abonnement: false,
    Pays: "",
    Fichier: null,
  });

  const [ouputValue, SetOuputValue] = useState([]);
  const [ImagePreview, SetImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      SetInputValue({
        ...inputValue,
        [name]: checked,
      });
    } else if (type === "file") {
      if (files && files[0]) {
        const file = files[0];
        SetInputValue({
          ...inputValue,
          [name]: file,
        });
        SetImagePreview(URL.createObjectURL(file));
      }
    } else {
      SetInputValue({
        ...inputValue,
        [name]: value,
      });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    SetOuputValue([
      ...ouputValue,
      {
        Nom: inputValue.Nom,
        Email: inputValue.Email,
        MotDePasse: inputValue.MotDePasse,
        Sexe: inputValue.Sexe,
        Abonnement: inputValue.Abonnement,
        Pays: inputValue.Pays,
        Fichier: inputValue.Fichier ? inputValue.Fichier.name : "",
        ImagePreview: ImagePreview,
      },
    ]);
    SetInputValue({
      Nom: "",
      Email: "",
      MotDePasse: "",
      Sexe: "",
      Abonnement: false,
      Pays: "",
      Fichier: null,
    });
  };

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="">Nom </label>
          <input
            type="text"
            name="Nom"
            value={inputValue.Nom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            value={inputValue.Email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Mot de passe</label>
          <input
            type="password"
            value={inputValue.MotDePasse}
            name="MotDePasse"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Sexe</label>
          <input
            type="radio"
            name="Sexe"
            value="Homme"
            checked={inputValue.Sexe === "Homme"}
            onChange={handleChange}
          />
          Homme
          <input
            type="radio"
            name="Sexe"
            value="Femme"
            checked={inputValue.Sexe === "Femme"}
            onChange={handleChange}
          />
          Femme
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            name="Abonnement"
            checked={inputValue.Abonnement}
            onChange={handleChange}
          />
          Abonnement
        </div>

        <div className="form-group">
          <label htmlFor="">Pays :</label>
          <select name="Pays" value={inputValue.Pays} onChange={handleChange}>
            <option value="">Sélectionner un pays</option>
            <option value="France">France</option>
            <option value="Belgique">Belgique</option>
            <option value="Suisse">Suisse</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="">Télécharger un fichier :</label>
          <input type="file" name="Fichier" onChange={handleChange} />
        </div>

        <button type="submit">Ajouter</button>
      </form>

      <h1>Voici vos informations</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Mot de passe</th>
            <th>Sexe</th>
            <th>Abonnement</th>
            <th>Pays</th>
            <th>Fichier</th>
          </tr>
        </thead>
        <tbody>
          {ouputValue.map((element, index) => (
            <tr key={index}>
              <td>{element.Nom}</td>
              <td>{element.Email}</td>
              <td>{element.MotDePasse}</td>
              <td>{element.Sexe}</td>
              <td>{element.Abonnement ? "Oui" : "Non"}</td>
              <td>{element.Pays}</td>
              <td>
                {element.ImagePreview && (
                  <img src={element.ImagePreview} alt="preview" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
