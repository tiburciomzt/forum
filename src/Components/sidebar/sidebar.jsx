import React from "react";

import './sidebar.css';

export const Sidebar = () => (
    <div className="categories"> 
        <ul>
        <li>Aportes</li>
        <li>Preguntas</li> 
        <li>SRC'S</li>
        <li>Modelos
            <ul>
                <li>ZZ Linux</li>
                <li>ZZ P Series</li>
                <li>ZZ I Series</li>
            </ul>
        </li>   
    </ul>  
</div>
    )