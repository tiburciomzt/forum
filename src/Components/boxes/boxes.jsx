import React from "react";
import { Box } from '../box/box';

import './boxes.css';

export const Boxes = props => (
    <div className='box-Text'>
    {props.boxes.map(box => (
        <Box key={box.id} box={box}/>
    ))}
    </div>
);