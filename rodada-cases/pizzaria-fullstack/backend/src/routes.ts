import express, { Express, Request, Response } from "express";
import cors from "cors";
import PizzaController from "./controller/PizzaController";
 
const pizza = new PizzaController;


// const app: Express = express();
// app.use(express.json());
// app.use(cors());
const routes = express.Router()
routes.get("/",(req:Request, res:Response) => {
    res.send("Luan de bequi")
})
// list of pizzas
routes.get("/api/pizzas", pizza.getPizza)
// list of orders
routes.get("/api/orders", )
// details of an individual order
routes.get("/api/orders/:id")
 
// app.listen(3003, () => {
//  console.log("Servidor rodando na porta 3003");
// });

export default routes;