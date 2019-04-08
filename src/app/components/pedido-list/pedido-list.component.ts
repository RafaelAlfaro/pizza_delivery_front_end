import { Component, OnInit, HostBinding } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
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
