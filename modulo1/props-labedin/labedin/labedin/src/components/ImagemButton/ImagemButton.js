import React from 'react';

import styledComponents from 'styled-components';       /* chama essa msm variavel ao aplicar nas tags. */

const CaixaBotao = styledComponents.div`               
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const Imagem = styledComponents.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <CaixaBotao>
            <Imagem src= {props.imagem}/>
            <p>{props.texto}</p>
        </CaixaBotao>

    )
}

export default ImagemButton;