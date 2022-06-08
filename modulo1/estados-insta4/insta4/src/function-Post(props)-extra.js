function Post(props)
{
  // const [state, setState] = useState({
  //   curtido: false,
  //   numeroCurtidas: 0,
  //   comentando: false,
  //   numeroComentarios: 0
  // })

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [componenteComentario, setComponenteComentario] = useState(null)

  const onClickCurtida = () => {
    setCurtido(!curtido)
    console.log('Curtiu!')
    
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)                                                                     /* muda: comentando = true*/
    if(comentando) {                                                                               /* se comentando = true */
      setComponenteComentario(<SecaoComentario aoEnviar={aoEnviarComentario}/>) 
    } else {
      setComponenteComentario(null)
    }                                                                           /*  só vai aparecer se comentando = true! caso for false, nao aparece nada */
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }
    
  // let componenteComentario
    
  // if(comentando) {
  //    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  //  }

  // const componenteComentario = comentando ? <SecaoComentario aoEnviar={aoEnviarComentario}/> : ''

  
  
  // const componenteComentario = (comentando, aoEnviarComentario) => {
  //   if(!comentando){
  //     return ""
  //   }
  //   return (
  //     <SecaoComentario aoEnviar={aoEnviarComentario}/>
  //   )
  // }


  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>


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
  )
}
