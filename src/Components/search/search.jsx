import React from "react";

import './search.css';

export const Search = ({placeholder, handleChange}) => (
    
    <div className='search-position'>
        <input
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
            className="input-search"
            id="input-search" 
        />
        <label
            className="search"
            htmlFor="input-search" 
        />
    </div>
    
);