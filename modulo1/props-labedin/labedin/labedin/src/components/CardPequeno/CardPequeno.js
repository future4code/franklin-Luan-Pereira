import React from 'react';
import styled from 'styled-components';

import './CardPequeno.css'

const SmallCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #000000;
    border-radius: 15px;
    padding: 20px 40px;
    margin-bottom: 10px;
    height: 100px;
`

const Imagem = styled.img`
    width: 30px;
    margin: 10px ;
`

const Informacoes = styled.div`
    display: flex;
    gap: 10px;
`

export default function CardPequeno(props) {             /* no props, é passado como objeto e os parametros sao passados diretamente no local em q vão estar */
    return(
        <SmallCard>
            <Imagem src={props.imagem} />
            <Informacoes>    
                <b> {props.categoria}: </b>
                <p> {props.dado} </p>
            </Informacoes>
        </SmallCard>
    )
}