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
import axios from "axios";
/**
 * Styles
 */
import { 
    Card, 
    Container,
    ImageHeader,
    Order
} from "./styled";
/**
 * Assets
*/
import PedidosHeader from '../../assets/PedidosHeader.png'

const OrdersPage = () => {
    const url = `${BASE_URL}/orders`
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setOrders(response.data)
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    return(
        <Container>
            <ImageHeader src={PedidosHeader} />
            {orders.map((eachOrder) => {
                return(
                    <Card>
                        <Order> {eachOrder.order_items} </Order>
                    </Card>
                )}
            )}
        </Container>
    )
}

export default OrdersPage;