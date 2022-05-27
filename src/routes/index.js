import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "../pages/Login";
import Home from '../pages/Home';
import LojaPontos from '../pages/Home/LojaPontos';
import Page404 from "../pages/Page404";
import Perfil from "../pages/Home/Perfil";
import FAQ from "../pages/Home/FAQ";

export default function routes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>} />   
                <Route exact path='/perfil' element={<Perfil/>} />   
                <Route exact path='/faq' element={<FAQ/>} />  
                <Route exact path='/lojapontos' element={<LojaPontos/>} />      
                <Route exact path='/home' element={<Home/>} />       
            </Routes>
        </Router>
    )
}
