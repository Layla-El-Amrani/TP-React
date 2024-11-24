import React, { Component } from 'react'
import { BrowserRouter as Router ,Link, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const navbarre = styled.nav`
color:red`





export default function Systeme_Routage() {
  return (
    <div>
        <navbarre>
            <ol>
                <li><Link to='/'> Home</Link></li>
                <li><Link to='/Admin'>Admin</Link></li>
                <li><Link to='/User'>User</Link></li>
            </ol>
        </navbarre>


  
      
    </div>
  )
}
