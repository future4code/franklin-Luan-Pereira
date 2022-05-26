import React from 'react';

import styled from 'styled-components';

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #000000;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const DivDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Titulo = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigCard>
            <Imagem src={ props.imagem } />
            <DivDescricao>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </DivDescricao>
        </BigCard>
    )
}

export default CardGrande;