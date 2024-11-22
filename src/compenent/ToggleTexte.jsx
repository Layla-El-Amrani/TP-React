import React, { useState } from 'react'

export default function ToggleTexte() {
  const [visible,setvisible]= useState('true')
  const handlevisible=()=>{
    setvisible(!visible)
  }
  return (
    <div>
      <button onClick={handlevisible}>{visible? 'masquer':'afficher'}</button>
      {visible && <p>ceci est un text masquer</p>}
      
      
    </div>
  )
}
