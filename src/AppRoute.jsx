import React from 'react'
import { Routes,Route } from 'react-router-dom';

import AfficherMessage from "./compenent/AfficherMessage";
import ChargerDonnées from "./compenent/chargerDonnées";
import Compteur from "./compenent/Compteur";
import FormulaireSaisie from "./compenent/FormulaireSaisie";
import ListeDynamique from "./compenent/ListeDynamique";
import MessageBoutton from "./compenent/MessageBoutton";
import Props from "./compenent/props";
import ToDoList from "./compenent/ToDoList";
import ToggleTexte from "./compenent/ToggleTexte";
import {ThemeProvider} from "./compenent/Context";
import Form from "./compenent/Form";
import Quiztrivia from "./compenent/Quiztrivia";
import GestionUser from "./compenent/GestionUser";
import PageNotFound from './compenent/PageNotFound';
import TodoDragDrop from './compenent/TodoDragDrop';
import Login from './compenent/Login';
import Signup from './compenent/Signup';
import Systeme_Routage from './compenent/Systeme_Routage';

import Home from './compenent/page_systeme_routage/home';
import Admin from './compenent/page_systeme_routage/Admin';
import User from './compenent/page_systeme_routage/User';
import Article from './compenent/page_systeme_routage/Article';
import ArticleDetail from './compenent/page_systeme_routage/ArticleDetail';



export default function AppRoute() {
  return (
   <Routes>
    <Route path='/Quiztrivia' element={<Quiztrivia/>}/>
    <Route path='/Form' element={<Form/>}/>
    <Route path='/AfficherMessage' element={<AfficherMessage />} />
    <Route path='/ChargerDonnées' element={<ChargerDonnées />} />
    <Route path='/Compteur' element={<Compteur />} />
    <Route path='/FormulaireSaisie' element={<FormulaireSaisie />} />
    <Route path='/ MessageBoutton' element={< MessageBoutton />} />
    <Route path='/ListeDynamique' element={<ListeDynamique/>} />
    <Route path='/Props' element={<Props />} />
    <Route path='/ToDoList' element={<ToDoList />} /> 
    <Route path='/GestionUser' element={<GestionUser />} /> 
    <Route path='*' element={<PageNotFound/>} /> 
    <Route path='/TodoDragDrop' element={<TodoDragDrop/>} />
    <Route path='/Login' element={<Login/>} /> 
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/Systeme_Routage' element={<Systeme_Routage/>} />
    
    <Route path='/' element={<Home/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/User' element={<User/>}/>

    <Route path='/Article' element={<Article/>}/>
    <Route path='/ArticleDetail' element={<ArticleDetail/>}/>
   </Routes>
  )
}
