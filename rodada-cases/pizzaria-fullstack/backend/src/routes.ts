import express, { Express, Request, Response } from "express";
import cors from "cors";
import PizzaController from "./controller/PizzaController";
 
const pizza = new PizzaController;

const routes = express.Router()
routes.get("/",(req:Request, res:Response) => {
    res.send("teste backend")
})
// list of pizzas
routes.get("/api/pizzas", pizza.getPizza)
// list of orders
routes.get("/api/orders", )
// details of an individual order
routes.get("/api/orders/:id", )

export default routes;