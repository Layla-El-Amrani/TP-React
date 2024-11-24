import React from 'react'
import { useLocation } from 'react-router-dom'


export default function About() {
    const location = useLocation()
    const {info,lang}=location.state ||{}

    // const queryParams = new URLSearchParams(location.search)
    //const info = queryParams.get('info')
    //const lang = queryParams.get('lang')
  return (
    <div>
        <h1>page about</h1>
        <p><strong>chamin actuel</strong> :{location.pathname}</p>

        <p><strong>recherche complete</strong> :{location.search}</p>

        <p><strong>info:</strong> :{info}</p>

        <p><strong>langue:</strong> :{lang}</p>

      
    </div>
  )
}
