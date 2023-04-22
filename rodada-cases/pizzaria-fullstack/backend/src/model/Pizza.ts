export default class PizzaTypes {
    constructor(
        private id:number,
        private name:string,
        private price:number,
        private ingredients:string
    ) {}
}

export interface PizzaTypesDB {
    id: number;
    price: number;
    ingredients: string;
}