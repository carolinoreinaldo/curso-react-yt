//isso é um Hook
import React, { useState } from 'react';
import Sub from './Sub';

export default props => {

    //operador destruction do java script
    //Aqui é declarada uma variável num, o método setNum para mudar seu valor
    //e o useState definindo o valor inicial 0 para a variável num;
    const [num, setNum] = useState(0);
    const [text, setText] = useState('Valor');

    function quandoClicar(value, text) {
        setNum(value);
        setText(text);
    }

    return (
        <div>
            <h4>{text} = {num}</h4>
            <Sub quandoClicar={quandoClicar}></Sub>
        </div>
    );
}