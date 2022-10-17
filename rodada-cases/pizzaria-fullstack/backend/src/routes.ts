import express, { Express, Request, Response } from "express";
import cors from "cors";
import PizzaController from "./controller/PizzaController";
import OrdersController from "./controller/OrdersController";
import PizzaOrderItemController from "./controller/PizzaOrderItem";
import OrderItemDatabase from "./database/OrderItemDatabase";

 
const pizza = new PizzaController;
const pizzaOrders = new OrdersController;
const pizzaOrderItem = new PizzaOrderItemController;

const routes = express.Router()
routes.get("/",(req:Request, res:Response) => {
    res.send("teste backend")
})
// list of pizzas
routes.get("/api/pizzas", pizza.getPizza)
// list of orders
routes.get("/api/orders", pizzaOrders.getOrders)
// details of an individual order
routes.get("/api/orders/:id", pizzaOrderItem.getOrderItem)

export default routes;