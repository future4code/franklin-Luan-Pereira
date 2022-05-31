import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
          nomeUsuario={'Luan'}
          fotoUsuario={'https://picsum.photos/60/50'}
          fotoPost={'https://picsum.photos/200/140'}
          />
          <Post
          nomeUsuario={'Andre'}
          fotoUsuario={'https://picsum.photos/40/50'}
          fotoPost={'https://picsum.photos/200/120'}
          />
        </MainContainer>
)

}


export default App;
