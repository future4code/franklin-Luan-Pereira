import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OrderIdPage = () => {

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
            })
    }, [])

    return(
        <div>
            <h1>ORDER ID PAGE</h1>
            <p>id: {orders.id}</p>
            <p>quantidade: {orders.quantity}</p>
            <p>nome: {orders.name}</p>
            <p>valor: {orders.price}</p>
            <p>ingredientes: {orders.ingredients}</p>

        </div>
    )
}

export default OrderIdPage;