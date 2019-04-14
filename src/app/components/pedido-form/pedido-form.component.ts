import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../../models/pedido'
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  public pedido: Pedido = {
    orderId: '',
    orderStatus: '',
    statusDescription: '',
    items: [],
    creationDateTime: 1,
    restaurantCode: 1
  }

  public disableControl: boolean;
  constructor(private pedidoService: PedidosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.pedidoService.getPedido(params.orderId)
      .subscribe(
        res => {
          this.pedido = res;
          this.disableControl = this.pedido.orderStatus === 'Delivered';
        },
        err => console.error(err)
      )
  }

  updatePedido() {
    this.pedido.orderStatus = 'Delivered';
    this.pedidoService.updatePedido(this.pedido.orderId, this.pedido)
      .subscribe(
        res => {
          this.pedidoService.updateOrderService(this.pedido.orderId).subscribe(
            res => {
              this.router.navigate(['/pedidos']);
            },
            err => console.error(err)
          );
        },
        err => console.error(err)
      )
  }

}
