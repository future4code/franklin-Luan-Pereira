import { BaseDatabase } from "./BaseDatabase";


export default class OrdersDatabase extends BaseDatabase {
    //SELECT order_items from Pizza_Orders;
    static index = async () => {
        const db = await BaseDatabase.connections("Pizza_Orders")
        .select("order_items")
        return db;
    }
}