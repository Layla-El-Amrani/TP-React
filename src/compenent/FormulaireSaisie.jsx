import React, { useState } from 'react'

export default function FormulaireSaisie() {
    const [Value,setValue]=useState('lina')
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">nom</label>
        <input type="text"
        onChange={handleChange}
        value={Value} />
      </form>
      <p>bonjour {Value}</p>
    </div>
  )
}
