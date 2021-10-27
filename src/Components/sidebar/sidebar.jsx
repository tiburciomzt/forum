import React from "react";

import './sidebar.css';

export const Sidebar = () => (
    <div className='box-Text'>
    {props.boxes.map(box => (
        <Box key={box.id} box={box}/>
    ))}

    )