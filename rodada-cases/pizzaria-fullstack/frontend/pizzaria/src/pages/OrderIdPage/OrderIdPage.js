/**
 * States
 */
import React, { useEffect, useState } from "react";
/**
 * Constants
 */
import { BASE_URL } from "../../constants/url";
/**
 * Routes
 */
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
/**
 * Styles
 */
 import { 
     CardFlavor,
   Container,
   ImageHeader,
   OrderNumber,
   PizzaIngredients,
   PizzaName,
   PizzaPrice,
   PizzaQtd,
} from "./styled";
/** 
 * Assets
*/
import PedidoIdHeader from '../../assets/PedidoIdHeader.png'

const OrderIdPage = () => {

    const navigate = useNavigate()
    const params = useParams()

    const url = `${BASE_URL}/orders/${params.id}`
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setOrders(response.data[0])
                console.log(response.data[0])
            })
            .catch((error) => {
                console.log(error)
                alert("Erro ao encontrar Pedido")
                navigate(-1)
            })
    }, [])

    return(
        <Container>
            <ImageHeader src={PedidoIdHeader} />
            <CardFlavor>
                <OrderNumber>Pedido: {orders.id}</OrderNumber>
                <PizzaName>{orders.name}</PizzaName>
                <PizzaIngredients>{orders.ingredients}</PizzaIngredients>
                <PizzaPrice>A partir de $ {orders.price}</PizzaPrice>
                <PizzaQtd>Qtd: {orders.quantity}</PizzaQtd>
            </CardFlavor>
        </Container>
    )
}

export default OrderIdPage;