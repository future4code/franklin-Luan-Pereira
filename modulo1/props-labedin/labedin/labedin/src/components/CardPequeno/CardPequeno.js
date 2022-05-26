import React from 'react';

import './CardPequeno.css'

export default function CardPequeno(props) {             /* no props, é passado como objeto e os parametros sao passados diretamente no local em q vão estar */
    return(
        <div className='smallcard-container'>
            <img src={props.imagem} />
            <div>    
                <b> {props.categoria}: </b>
                <p> {props.dado} </p>
            </div>
        </div>
    )
}