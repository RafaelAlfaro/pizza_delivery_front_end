import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  API_URL = 'https://g1containerorderservice.azurewebsites.net/api';
  constructor(private http: HttpClient) { }
  getPedidos() {
    return this.http.get(`${this.API_URL}/orders`);
  }
  getPedido(id: string) {
    return this.http.get(`${this.API_URL}/orders/${id}`);
  }

  getPedidoItems(id: string) {
    return this.http.get(`${this.API_URL}/orders/${id}/items`);
  }

  updatePedido(id: string | number, updatedPedido: Pedido): Observable<Pedido> {
    console.log(id);
    return this.http.put(`${this.API_URL}/orders/${id}`, updatedPedido);
  }
}
