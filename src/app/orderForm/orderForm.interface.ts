export interface orderForm{
    cstName: string;
    cstEmail: string;
    ordersList: Orders[];
    cstDob: string;
}
export interface Orders{
  order_product:string;
  product_qty:number;
}
