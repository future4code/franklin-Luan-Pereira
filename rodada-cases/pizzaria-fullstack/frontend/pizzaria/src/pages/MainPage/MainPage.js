import React, { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PizzasPage from "../PizzasPage/PizzasPage";
import OrdersPage from "../OrdersPage/OrdersPage";
import OrderIdPage from "../OrderIdPage/OrderIdPage";
import { goToPizzaPage, goToOrdersPage, goToOrdersIdPage } from "../../routes/coordinator";

const MainPage = () => {
    const navigate = useNavigate();

    const [ orderNumber, setOrderNumber ] = useState(null) 
    
    return(
        <div>
            <h1>MAIN PAGE</h1>
            <session>
                <button
                onClick={()=>goToPizzaPage(navigate)}
                > 
                    Menu de Pizza
                </button>
                <p>Selecione o pedido:</p>
                <input 
                value={orderNumber}
                onChange={(order) =>{
                    setOrderNumber(order.target.value)
                    console.log(orderNumber)
                }}
                />
                <button
                onClick={()=>{
                    goToOrdersIdPage(navigate, orderNumber);
                    console.log(`orderNumber: ${orderNumber}`);
                }}
                > 
                    Pedidos por Numero 
                </button>
                <button
                onClick={()=>goToOrdersPage(navigate)}
                > 
                    Todos os Pedidos 
                </button>
            </session>
        </div>
    )
}

export default MainPage;