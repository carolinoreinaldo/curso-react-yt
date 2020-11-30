import './App.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/aula1/Primeiro';
import ComParametro from './components/aula1/ComParametro';
import Card from './components/layout/Card';
import ComFilhos from './components/aula1/ComFilhos';
import Repeticao from './components/aula1/Repeticao';
import Condicional from './components/aula1/Condicional';
import Pai from './components/aula2/comunicacao/direta/Pai';
import Super from './components/aula2/comunicacao/indireta/Super';
import PaiState from './components/aula2/comunicacao/indireta/PaiState';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default props => 
    <div className="App">
        <Card titulo="#10 - Mega sena" color = "#9C0F5F">
            <Mega qtdNumeros={6} />
        </Card>
        <Card titulo="#09 - Contador" color = "#9C0F5F">
            <Contador />
        </Card>
        <Card titulo="#08 - Input" color = "#9C0F5F">
            <Input />
        </Card>
        <Card titulo="#07 - Comunicação Indireta e Pai com estado" color = "#f00">
            <PaiState />
        </Card>
        <Card titulo="#06 - Comunicação Indireta" color = "#000">
            <Super />
        </Card>
        <Card titulo="#05 - Comunicação Direta" color = "#0087CB">
            <Pai sobrenome="Aquino"/>
        </Card>
        <Card titulo="#04 - Condicional" color = "#FA6900">
            <ComFilhos>
                <Condicional numero = {5} />
            </ComFilhos>
        </Card>
        <Card titulo="#03 - Componente com Filhos" color = "#E94C6F">
            <ComFilhos>
                <Repeticao />
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro" color = "#588C73">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o Subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color = "#FFAC00">
            <Primeiro />
        </Card>
    </div>