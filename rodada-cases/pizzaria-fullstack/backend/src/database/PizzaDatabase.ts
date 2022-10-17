import { BaseDatabase } from "./BaseDatabase";


export default class PizzaDatabase extends BaseDatabase {
    // SELECT * from Pizza;
    static index = async () => {
        const db = await BaseDatabase.connections("Pizza")
        .select("name","price","ingredients")
        return db;
    }
}