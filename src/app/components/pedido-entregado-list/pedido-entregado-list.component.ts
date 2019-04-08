import { Component, OnInit, HostBinding } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from 'src/app/models/pedido';
@Component({
  selector: 'app-pedido-entregado-list',
  templateUrl: './pedido-entregado-list.component.html',
  styleUrls: ['./pedido-entregado-list.component.css']
})
export class PedidoEntregadoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  pedidos: any = [];
  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.getPedidos();
  }
  getPedidos() {
    this.pedidosService.getPedidos().subscribe(
      res => {
        this.pedidos = res;
      },
      err => console.error(err)
    )
  }

}
