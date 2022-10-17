import { Request, Response } from "express";
import OrderItemDatabase from "../database/OrderItemDatabase";


export default class PizzaOrderItemController {
    // constructor (protected PizzaDatabase: PizzaDatabase) {}    
    public getOrderItem = async (req:Request, res:Response) => {
        try {
            const id = req.params.id;

            const response = await OrderItemDatabase.index(id);
            // console.log(response)
            res.status(200).send(response);

        } catch(error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
}