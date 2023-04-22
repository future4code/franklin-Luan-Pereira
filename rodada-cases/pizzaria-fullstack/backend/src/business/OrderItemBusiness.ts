import OrderItemDatabase from "../database/OrderItemDatabase";

export default class OrderItemBusiness {
    public getOrderItem = async (id:string) => {

        const orderitemdatabase = new OrderItemDatabase();
        const verifyId = await orderitemdatabase.getOrderItem(id)
        
        // When we insert an id unknowed, it returns an empty array
        if(verifyId.length === 0){
            throw new Error("id não encontrado!")
        }

        return verifyId;
    }
}