import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

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
        <div>
            <h1>ORDERS PAGE</h1>
            {orders.map((eachOrder) => {
                return(
                    <div>
                        {/* <img src= /> */}
                        <p> {eachOrder.order_items} </p>
                    </div>
                )}
            )}
        </div>
    )
}

export default OrdersPage;