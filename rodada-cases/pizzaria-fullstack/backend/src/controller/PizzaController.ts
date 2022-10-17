import { Request, Response } from "express";
import PizzaDatabase from "../database/PizzaDatabase";


export default class PizzaController {
    // constructor (protected PizzaDatabase: PizzaDatabase) {}    
    public getPizza = async (req:Request, res:Response) => {
        try {
            // const input:any = {
            //     name: req.body.name,
            //     price: req.body.price,
            //     ingredients: req.body.ingredients
            // };

            const response = await PizzaDatabase.index();
            console.log(response)
            res.status(200).send(response);

        } catch(error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
}