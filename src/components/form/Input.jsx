import React, { useState } from 'react';

export default (props) => {
    const [nome, alteraNome] = useState('Pedro');

    return (
        <>
            <input 
                type="text" 
                value={nome}
                onChange={ev => alteraNome(ev.target.value)} //no onChange ele recebe o evento que chama o alteraNome que muda o estado e muda a view    
            >
            </input>
        </>
    );
}