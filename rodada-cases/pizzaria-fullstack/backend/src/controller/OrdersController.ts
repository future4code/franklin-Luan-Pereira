import { Request, Response } from "express";
import OrdersDatabase from "../database/OrdersDatabase";


export default class OrdersController {
    // constructor (protected OrdersDatabase: OrdersDatabase) {}    
    public getOrders = async (req:Request, res:Response) => {
        try {

            const response = await OrdersDatabase.index();
            // console.log(response)
            res.status(200).send(response);

        } catch(error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                return res.status(400).send({ message: error.message });
              }
              res.status(500).send({ message: 'Erro inesperado' });
        }
    }
}