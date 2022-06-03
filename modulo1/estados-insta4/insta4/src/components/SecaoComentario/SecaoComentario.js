import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Digite aqui...'}
				value={props.valorInput}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}