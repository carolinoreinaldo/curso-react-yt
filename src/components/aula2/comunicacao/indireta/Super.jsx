import React from 'react';
import Sub from './Sub';

export default props => {

    function quandoClicar(value, text) {
        console.log(text + " = " + value);
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub quandoClicar={quandoClicar}></Sub>
        </div>
    );
}