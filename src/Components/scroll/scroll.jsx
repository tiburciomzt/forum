import React from "react";

export const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '1px solid black', height: '700px', width:"75em", margin:"5rem 0 0 300px", padding: 0}}>
            {props.children}
        </div>
    )
};