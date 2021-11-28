import React from "react";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import App from "../../App";
import './sidebar.css';
import Aportes from "../../pages/aporte";

export const Sidebar = () => (
        <div className="categories"> 
            <ul>
            
                    <li><Link to="/aportes">Aportes</Link></li>
                    <li><Link to="/preguntas">Preguntas</Link></li> 
                    <li><Link to="/srcs">SRC'S</Link></li>
                    <li><Link to="/modelos">Modelos</Link></li>
                
            </ul>
            <Routes>
                <Route path="/aportes" element={<Aportes/>}/>
                <Route path="/preguntas"/>
                <Route path="/srcs"/>
                <Route path="/modelos"/>
            
            </Routes>
        </div>
    
    )