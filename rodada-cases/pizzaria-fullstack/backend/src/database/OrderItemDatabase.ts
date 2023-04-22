import { BaseDatabase } from "./BaseDatabase";


export default class OrderItemDatabase extends BaseDatabase {
    public getOrderItem = async (id:string) => {
        // SELECT Pizza_order_item.id, Pizza_order_item.quantity, Pizza.name, Pizza.price, Pizza.ingredients from Pizza_order_item
        // JOIN Pizza
        // ON Pizza_order_item.id_pizza = Pizza.id;

        const db = await BaseDatabase.connections("Pizza_order_item")
        .select([
            'Pizza_order_item.id',
            'Pizza_order_item.quantity',
            'Pizza.name',
            'Pizza.price',
            'Pizza.ingredients'
        ])
        .from('Pizza_order_item')
        .where('Pizza.id', '=', id)
        .join(
            'Pizza',
            'Pizza_order_item.id_pizza',
            'Pizza.id'
        )

        return db;
    }
}
