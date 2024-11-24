import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export default function Home() {
    
const navigate = useNavigate()
const location = useLocation()
    const handleRoleSelection=(role)=>{
       setTimeout(()=>{
        if (role === "admin"){
            navigate("/Admin")
        }else if (role === "user"){
            navigate("/User")

        }
       },2000)
    }
  return (
    <div>
      <h1>Bienvenue sur la page acceuil</h1>
      <p><strong>chemin actuel :{location.pathname}</strong></p>
      <p><strong>recharche :</strong>{location.search   ||'aucun parametre de recherche'}</p>
   




      <p>Veuillez selectionner votre role</p>
      <button onClick={()=>{handleRoleSelection("admin")}}>admin</button>
      <button onClick={()=>{handleRoleSelection("user")}}>user</button>
    </div>
  )
}
