import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private pedidoService: PedidosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPedidos();
  }
  getPedidos() {
    this.pedidoService.getPedidos().subscribe(
      (res: any[]) => {
        this.pedidos = res.filter((element) => element.orderStatus === "Created" || element.orderStatus === "Serving");
      },
      err => console.error(err)
    )
  }
  serveOrder(pedido: Pedido) {
    pedido.orderStatus = 'Serving';
    this.pedidoService.updatePedido(pedido.orderId, pedido)
      .subscribe(
        res => {
          this.pedidoService.addOrderService({
            "orderId": pedido.orderId,
            "status": 1,
            "customerName": ""
          }).subscribe(
            res => {
              this.router.navigate([`/pedidos/edit/${pedido.orderId}`]);
            },
            err => console.error(err)
          );
        },
        err => console.error(err)
      )
  }
}
