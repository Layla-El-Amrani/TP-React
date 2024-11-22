//2. Liste de tâches (To-Do List)
import React, { useState } from 'react'

export default function Compteur() {
    const [value,setValue]=useState(0)
   
  return (
    <div>
      <button onClick={()=>{setValue(value-1)}}>Décrémenter</button>
      <p>{value}</p>
      <button onClick={()=>{setValue(value+1)}}>Incrémenter</button>
      <button onClick={()=>{setValue(0)}}>Réinitialiser</button>
    </div>
  )
}
