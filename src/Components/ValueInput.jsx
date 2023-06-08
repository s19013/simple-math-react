import React from 'react';
import ReactDOM from 'react-dom/client';

export default function ValueInput(props) {
    return (
        <input type="text" value={props.value}></input>
    )
}