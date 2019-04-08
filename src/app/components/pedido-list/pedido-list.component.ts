import { Component, OnInit, HostBinding, Input } from '@angular/core';
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

  @Input()
  title: string;

  @Input()
  orderStatus: string;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.getPedidos();
  }
  getPedidos() {
    this.pedidosService.getPedidos().subscribe(
      (res: any[]) => {
        this.pedidos = res.filter((element) => element.orderStatus === this.orderStatus);
      },
      err => console.error(err)
    )
  }
}
