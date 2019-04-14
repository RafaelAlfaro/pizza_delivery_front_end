export interface Pedido {
    orderId?: string;
    orderStatus?: string;
    statusDescription?: String;
    items?: any;
    creationDateTime?: any;
    restaurantCode?: any;
    restaurantName?: String;
}
export interface items {
    orderItemId: String;
    itemCode: String;
    description: String;
    quantity: String;
    orderId: String;
    order: Producto;

}
export interface Producto {
    id: number;
    name: String;
    price: number;
}
export interface OrderService {
    id?: String,
    orderId: string;
    status: string;
    notes?: String;
    serverStart?: Date;
    serverEnd?: Date;
}
