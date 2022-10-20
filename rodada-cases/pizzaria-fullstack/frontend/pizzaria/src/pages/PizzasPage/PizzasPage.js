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
     CardFlavor,
    Cards,
    Container,
    ImageHeader,
    PizzaIngredients,
    PizzaName,
    PizzaPrice,
} from "./styled";
/**
 * Assets
*/
import PizasHeader from '../../assets/PizzasHeader.png'


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
        <Container>
            <ImageHeader src={PizasHeader} />
            <Cards>
                {pizza.map((eachPizza) => {
                    return(
                        <CardFlavor>
                            <PizzaName> {eachPizza.name} </PizzaName>
                            <PizzaIngredients> {eachPizza.ingredients} </PizzaIngredients>
                            <PizzaPrice> a partir de R${eachPizza.price} </PizzaPrice>
                        </CardFlavor>
                    )}
                )}
            </Cards>
        </Container>
    )
}

export default PizzasPage;