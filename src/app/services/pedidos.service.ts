import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  API_URL = environment.API_URL;

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
    console.log(id);
    return this.http.put(`${this.API_URL}/Orders/${id}`, updatedPedido);
  }
}
