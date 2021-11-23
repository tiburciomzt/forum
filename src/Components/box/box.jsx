import React from "react";
import './box.css'

export const Box = (props) => (
    <div className='box-container'>
        <h1> {props.box.userId} </h1>
        <h4> {props.box.title} </h4>
        <h5> {props.box.body} </h5>
    </div>
)