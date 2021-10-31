import React from "react";
import { Box } from '../box/box';
import { Filter } from "../filter/filter";

import './boxes.css';

export const Boxes = props => (
    <div className='box-Text'>
    <Filter/>
    {props.boxes.map(box => (
        <Box key={box.id} box={box}/>
    ))}
    </div>
);