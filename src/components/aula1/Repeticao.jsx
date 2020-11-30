import React from 'react';

import produtos from '../../data/produtos';


export default props => {

    function getProdutos() {
        return produtos.map(prod => {
            return (
                <li key = {prod.id}>
                    {prod.id} - {prod.name}  Price : R$ {prod.price}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}
