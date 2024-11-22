import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              {/* Liste 1 */}
              <li>
                <Link to="/Liste1">Liste 1</Link>
                <ul>
                  <li>
                    <Link to="/Quiztrivia">Quiztrivia</Link>
                  </li>
                  <li>
                    <Link to="/Form">Form</Link>
                  </li>
                  <li>
                  <Link to="/ToDoList">ToDoList</Link>
                  </li>
                </ul>
              </li>

              {/* Liste 2 */}
              <li>
                <Link to="/Liste2">Liste 2</Link>
                <ul>
                  <li>
                    <Link to="/ChargerDonnées">ChargerDonnées</Link>
                  </li>
                  <li>
                    <Link to="/Compteur">Compteur</Link>
                  </li>
                  <li>
                    <Link to="/FormulaireSaisie">FormulaireSaisie</Link>
                  </li>
                </ul>
              </li>

              {/* Liste 3 */}
              <li>
                <Link to="/Liste3">Liste 3</Link>
                <ul>
                  <li>
                    <Link to="/MessageBoutton">MessageBoutton</Link>
                  </li>
                  <li>
                    <Link to="/ListeDynamique">ListeDynamique</Link>
                  </li>
                  <li>
                    <Link to="/props">props</Link>
                  </li>
                  <li>
                  <Link to="/AfficherMessage">AfficherMessage</Link>
                  </li>
                  <li>
                  <Link to="/GestionUser">GestionUser</Link>
                  </li>
                </ul>

                
              </li>

               {/* Liste 2 */}
               <li>
                <Link to="/Liste2">Liste 2</Link>
                <ul>
                  <li>
                    <Link to="/ChargerDonnées">TodoDragDrop</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="/Signup">Signup</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <AppRoute />
        </div>
      </Router>
    </>
  );
}

export default App;
