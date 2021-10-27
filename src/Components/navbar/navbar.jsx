import React from "react";

import './navbar.css';
import { Search } from "../search/search";


export const Navbar = () => (
    <nav className="navbar">
        <img className="logo-nav"
            src='https://pngimg.com/uploads/ibm/ibm_PNG19658.png'
            alt='logoIBM'/>
        <Search
            placeholder='search' 
            handleChange = {e => this.setState({searchTitle: e.target.value})}
            />    
    </nav>
    )

