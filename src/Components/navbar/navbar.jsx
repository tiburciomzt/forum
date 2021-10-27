import React from "react";

import './navbar.css';
import { Search } from "../search/search";
import logo from './logo.svg'


export const NavBar = () => ( 
<nav className = "navbar" >
    <img className = "logo-nav"
        src = { logo }
        alt = 'logoIBM'/>
</nav>
)