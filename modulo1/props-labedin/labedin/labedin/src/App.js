import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import foto from './images/luan-foto.png';                                                    /* foto é o nome da "variavel" que recebe o caminho dela */
import emailIcone from './images/email-icone.png';
import localIcone from './images/local-icone.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto}                                                                     /* props imagem recebe a "variavel" foto */
          nome="Luan Wallace" 
          descricao="E aí ! Eu sou Luan, aluno recente da Labenu e desenvolvedor Full Stack da Boticário! Estou tentando absorver o máximo de aprendizado possível e complementar meus estudos. Meu sonho é ser um Dev Senior com skill boa suficiente para ajudar os Juniors que estão começando assim como eu! :)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem={emailIcone}
          categoria="Email"
          dado="w.luan@yahoo.com"
        />
        <CardPequeno
          imagem={localIcone}
          categoria="Endereço"
          dado="Rua Nossa Sr Copacabana, 132"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
