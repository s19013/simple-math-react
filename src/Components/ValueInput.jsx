import { useState,React } from 'react';

export default function ValueInput({value,valueChange}) {
    function handleChange(e){
        // ここで親の関数を動かしてるみたいな? 渡された関数の元を参照してるみたいな?
        valueChange(e.target.value)
    }

    return (
        <input type="text" value={value} onChange={handleChange}></input>
    )
}

