import React from "react";
import { useNavigate } from 'react-router-dom'          //permite acessar o historico dentro de qualquer componente fuuncional
import { goToListTripsPage, goToLoginPage} from "../routes/cordination";

// se puxar a funcao do cordination, precisa passar o "navigate" como parametro. Se declarar a funcao de navagecao dentro do componente que usará ela, nao é necessario por navigate como parametro.



function HomePage() {
  const navigate = useNavigate();              // navigate permite a trocar a pagina atual

  return (
    <div >
        <img />
        <div>
            <h1>Seja Bem Vindo ao Labex</h1>
            <div className='buttons'>
                <button onClick={ () => goToListTripsPage(navigate) }>Ver Viagens</button>
                <button onClick={ () => goToLoginPage(navigate) } >Login</button>
                {/* vai para pagina de Login*/}
            </div>
        </div>
    </div>
  );
}

export default HomePage;