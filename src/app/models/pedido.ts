export interface Pedido {
    orderId?: string;
    orderStatus?: number;
    statusDescription?: String;
    items?: any;
    creationDateTime?: any;
    restaurantCode?: any;
    restaurantName?: String;
}
export interface items{
    itemCode: String;
    description:Producto;
    quantity: String;
}
export interface Producto{
    id: number;
    name: String;
    price: number;
}