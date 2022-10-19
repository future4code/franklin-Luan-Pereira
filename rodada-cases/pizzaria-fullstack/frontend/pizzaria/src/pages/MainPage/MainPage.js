/**
 * States
 */
import React, { useState } from "react";

/**
 * Constants
 */
// import { BASE_URL } from "../../constants/url";

/**
 * Pages
 */
// import PizzasPage from "../PizzasPage/PizzasPage";
// import OrdersPage from "../OrdersPage/OrdersPage";
// import OrderIdPage from "../OrderIdPage/OrderIdPage";

/**
 * Routes
 */
import { useNavigate } from "react-router-dom";
import { goToPizzaPage, goToOrdersPage, goToOrdersIdPage } from "../../routes/coordinator";

/**
 * Assets
 */
import LogoPizzaria from '../../assets/LogoPizzaria.png';

// import MainPageBackground from '../../../public/MainPageBackground.png'

/**
 * Styles
 */

import { 
    Container,
    ImageLogo,
    MenuSession,
    PizzaFlavorsButton,
    InputOrder,
    ButtonOrder,
    ButtonAllOrders,
} from "./styled";

const MainPage = () => {
    const navigate = useNavigate();

    const [ orderNumber, setOrderNumber ] = useState('Informe o Pedido..') 
    
    return(
        <Container>
            <MenuSession>
                <ImageLogo src={LogoPizzaria} alt='Logo do cabecalho' />
                <div style={{width: '730px'}}>     
                    <PizzaFlavorsButton
                    onClick={()=>goToPizzaPage(navigate)}
                    > 
                        Menu de Pizza
                    </PizzaFlavorsButton>
                    <InputOrder 
                    value={orderNumber}
                    onChange={(order) =>{
                        setOrderNumber(order.target.value)
                        console.log(orderNumber)
                    }}
                    />
                    <ButtonOrder
                    onClick={()=>{
                        goToOrdersIdPage(navigate, orderNumber);
                        console.log(`orderNumber: ${orderNumber}`);
                    }}
                    > 
                    Encontrar
                    </ButtonOrder>
                    <ButtonAllOrders
                    onClick={()=>goToOrdersPage(navigate)}
                    > 
                        Pedidos
                    </ButtonAllOrders>
                </div>
            </MenuSession>
        </Container>
    )
}

export default MainPage;