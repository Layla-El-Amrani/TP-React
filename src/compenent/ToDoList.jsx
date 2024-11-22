import React, { useState } from 'react';
import './style/ToDoList.css'; // Assure-toi que le chemin est correct

export default function ToDoList() {
    const [value, setValue] = useState('');
    const [liste, setListe] = useState([]);

    const handlechange = (e) => {
        setValue(e.target.value);
    };

    const ajoutertoliste = () => {
        if (value.trim()) {  // Évite d'ajouter une tâche vide
            setListe([...liste, value]);
            setValue('');
        }
    };

    const supprimertoliste = (index) => {
        const nouvelleListe = liste.filter((_, i) => i !== index);
        setListe(nouvelleListe);
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">Liste de Tâches</h2>
            <div className="todo-input-container">
                <input 
                    type="text"
                    value={value}
                    onChange={handlechange}
                    className="todo-input"
                    placeholder="Ajouter une tâche"
                />
                <button onClick={ajoutertoliste} className="todo-button">Ajouter</button>
            </div>
            <ul className="todo-list">
                {liste.map((element, index) => (
                    <li key={index} className="todo-item">
                        {element}
                        <button 
                            onClick={() => supprimertoliste(index)} 
                            className="todo-delete-button"
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
