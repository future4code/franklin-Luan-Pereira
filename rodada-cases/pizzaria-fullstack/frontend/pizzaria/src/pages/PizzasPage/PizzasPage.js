import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

const PizzasPage = () => {
    const url = `${BASE_URL}/pizzas`
    const [ pizza, setPizza ] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setPizza(response.data)
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    return(
        <div>
            <h1>PIZZAS PAGE</h1>
            {pizza.map((eachPizza) => {
                return(
                    <div>
                        {/* <img src= /> */}
                        <h1> {eachPizza.name} </h1>
                        <p> valor: {eachPizza.price} </p>
                        <p> {eachPizza.ingredients} </p>
                    </div>
                )}
            )}
        </div>
    )
}

export default PizzasPage;