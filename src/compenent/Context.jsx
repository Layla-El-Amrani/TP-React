
import React, { createContext, useState } from 'react';


const themeContext = createContext()


const ThemeProvider=({children})=> {

    const [darkMode,setDarkmode] =useState(false)
    const toggleTheme=()=>{
        setDarkmode(prevMode=>!prevMode)
    }

  return (
    <div>
        <themeContext.Provider value={{darkMode,toggleTheme}}>
           {children}

        </themeContext.Provider>
     
    </div>
  )
}
export  {themeContext,ThemeProvider}
