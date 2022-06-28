import React from "react";
import { useNavigate } from 'react-router-dom'            //permite acessar o historico dentro de qualquer componente fuuncional



function HomePage() {
  const navigate = useNavigate();              // navigate permite a trocar a pagina atual

  const goToLoginPage = () => {                // funcao que utiliza o navigate para ir para outra pagina
    navigate("login/")                        // podemos chamar direto com navigate("login/")
  }

  

  return (
    <div >
        <img />
        <div>
            <h1>Seja Bem Vindo ao Labex</h1>
            <div className='buttons'>
                <button>Ver Viagens</button>
                <button onClick={() => { navigate("login/")} }>Login</button>                {/* vai para pagina de Login*/}
            </div>
        </div>
    </div>
  );
}

export default HomePage;