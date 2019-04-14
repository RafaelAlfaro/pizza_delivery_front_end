import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { OrderService } from '../models/pedido';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  API_URL = environment.API_URL;
  API_URL_2 = environment.API_URL_2;

  constructor(private http: HttpClient) { }
  getPedidos() {
    return this.http.get(`${this.API_URL}/Orders`);
  }
  getPedido(id: string) {
    return this.http.get(`${this.API_URL}/Orders/${id}`);
  }

  getPedidoItems(id: string) {
    return this.http.get(`${this.API_URL}/Orders/${id}/items`);
  }

  updatePedido(id: string | number, updatedPedido: Pedido): Observable<Pedido> {
    return this.http.put(`${this.API_URL}/Orders/${id}`, updatedPedido);
  }

  getOrderServices() {
    return this.http.get(`${this.API_URL_2}/OrderService`);
  }

  addOrderService(orderService: any) {
    return this.http.put(`${this.API_URL_2}/OrderService`, orderService);
  }

  updateOrderService(orderId: String) {
    return this.http.post(`${this.API_URL_2}/OrderService/${orderId}`, {});
  }
}
