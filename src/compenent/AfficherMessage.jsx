import React, { useContext } from 'react'
import { themeContext } from './Context'

export default function AfficherMessage() {
  const {darkMode,toggleTheme}=useContext(themeContext)
  return (
    <div style={{background:darkMode?'#333':'#fff',color:darkMode?'#fff':'#000'}}>
      <p>{darkMode?'mode sombre active':'mode sombre desactivé'}</p>
      <button onClick={toggleTheme}>changer le theme</button>
      <h1>hello word</h1>
    </div>
  )
}
