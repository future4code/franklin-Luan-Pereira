import { PizzaTypesDB } from "../model/Pizza";
import { BaseDatabase } from "./BaseDatabase";


export default class PizzaDatabase extends BaseDatabase {
    // constructor(obj:any) {
    //     super(obj)
    // }
    static index = async () => {
        const db = await BaseDatabase.connections("Pizza").select("name","price","ingredients")
        return db;
    }
}