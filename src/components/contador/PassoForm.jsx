import React, { Component } from 'react';

export default (props) => {
    return (
        <>
            <h4> Passo : {props.passo}</h4>
            <input
                type="number"
                value={props.passo}
                //o + garante que o valor vai ser numérico
                onChange={ev => props.onPassoChange(+ev.target.value)}
            />
        </>
    )
}