import React, { useState } from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

function Post({ post }) {
  // const [state, setState] = useState({
  //   curtido: false,
  //   numeroCurtidas: 0,
  //   comentando: false,
  //   numeroComentarios: 0
  // })

  
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)                             // valor inicial 0
  const [curtido, setCurtido] = useState(false);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0)                         // valor inicial 0
  const [inputComentario,setInputComentario] = useState("")

  const onClickCurtida = () => {
    setCurtido(!curtido);

    if(!curtido){
    setnumeroCurtidas(numeroCurtidas+1)
    } else {
      setnumeroCurtidas(numeroCurtidas-1)
    }
    console.log("Curtiu!");
  };

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario valorInput={inputComentario} aoEnviar={aoEnviarComentario} aoChangeComentario={aoComentar}/> //inputComentario vai 
    } else {                                              //ser o resultado do que vc escreveu e o onChange vai ser a funcao que recebera os caracteres dogotadps
      componenteComentario = null
    }
    console.log(comentando);
  };

  const aoComentar = (elemento) => {                               //aoComentar é a funcao que guarda o caracter digitado na variavel e manda pro 
                                                                   //setInputComentario atualizar o InputComentario
    setInputComentario(elemento.target.value)                         
  }

  const aoEnviarComentario = () => {
    setComentando(false);
    // Quando envia o comentario, ele define como false para esconder o <sessaoComentario>
    setNumeroComentarios(numeroComentarios + 1)                           // Aqui ele incrementa o curtida
  };

  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  let componenteComentario
  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />;
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={post.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{post.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={post.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  );
}

export default Post;
