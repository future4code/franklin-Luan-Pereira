import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 10px 10px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
	border-radius: 15%;
	border-style: hidden;
`

const Botao = styled.button`
	background-color: lightsalmon;
	color: white;
	border-radius: 15%;
	border-style: hidden;
`

export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Digite aqui...'}
				value={props.valorInput}
				onChange={props.onChangeComentario}
			/>
			<Botao onClick={props.aoEnviar}>Enviar</Botao>
		</CommentContainer>
	)
}