import React, { useState } from 'react'

export default function ListeDynamique() {
    const [list,setList] = useState(['banane','pomme','manga','orange'])
    const [Element,setElement] = useState('')
    const handlechange=(e)=>{
        setElement(e.target.value)
    
    

    }
    const ajouterElement=()=>{
        setList([...list,Element])
        setElement('')
    }
  return (
    <div>
    <h1>Ajouter element</h1>

      <input type="text"
      onChange={handlechange}
      value={Element}
       />
       <button onClick={ajouterElement}>ajouter</button>
<ul>
      {list.map((element,index)=>(
         <li key={index}>{element}</li>
      )
       
      )}
     </ul>
    </div>
  )
}
