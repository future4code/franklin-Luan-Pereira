import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import LISTA_FEED from "./data/listaFeed";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [listaFeed, setlistaFeed] = useState(LISTA_FEED);
  return (
    <MainContainer>
      {listaFeed.map((post) => (
        <Post post={post} />
      ))}
    </MainContainer>
  );
}

export default App;
