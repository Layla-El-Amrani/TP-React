import React, { useState } from 'react'

export default function MessageBoutton() {
    const [text,changetext] = useState('hello')
    const handlechangetext=()=>{
        changetext('bonjour')

    }
  return (
    <div>
        <h1>{text}</h1>
      <button onClick={handlechangetext}>change</button>
    </div>
  )
}
