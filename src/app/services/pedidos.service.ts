import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  API_URL= 'https://g1containerorderservice.azurewebsites.net/api';
  constructor(private http: HttpClient) { }
  getPedidos(){
    return this.http.get(`${this.API_URL}/orders`);
  }
  getPedido(id:string){
    return this.http.get(`${this.API_URL}/Order/${id}`);
  }
  updatePedido(id: string|number, updatedPedido: Pedido): Observable<Pedido> {
    return this.http.put(`${this.API_URL}/Order/${id}`,updatedPedido);
    
  }
}
