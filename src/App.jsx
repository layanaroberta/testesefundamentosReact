import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Tela criada para fundamentos de React /Praticando fazendo alterações e testando.</h1>

        <div className="Cards">
            <Card titulo="#11 - Tela mega (primeira)" color="#73503C">
            <Mega qtdeNumero={10}></Mega>
            </Card>
            <Card titulo="#10 - Tela Contador (segunda)" color="#293E6A">
            <Contador passo={10} valor={90}></Contador>
            </Card>
            <Card titulo="#09 - Tela Input (terceira)" color="#9C0F5F">
            <Input></Input>
            </Card>
            <Card titulo="#08 - Tela Comunicação Indireta (quarta)" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Tela Comunicação Direta (quinta)" color="#28ABE3">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Tela Condicional v2" color="#FA6900">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Tela Condicional v1" color="#E94C6F">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Patrimônio liquído até o presente momento" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Tela Com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Sala comercial em Brasília</li>
                        <li>Caferia em São Paulo</li>
                        <li>Pub no Rio de Jeneiro</li>
                        <li>Starbuks em Maceió-Al</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Sobre o projeto:" color="#FF85CB">
                <ComParamentro
                    titulo="Projeto da minha carreira de investidora."
                    subtitulo="Neste projeto apresentarei todo o levantamento dos meus imóveis próprios, imóveis para futuras compras, lançamentos e toda a renda que está sendo investida e também seus lucros obtidos.  <= Resumo"
                />
            </Card>
            <Card titulo="#01 - Seja bem vindo!" color="#6495ed">
                <Primeiro />
            </Card>
        </div>
    </div>
);
