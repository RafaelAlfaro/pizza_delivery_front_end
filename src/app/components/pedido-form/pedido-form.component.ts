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
    orderId: '0',
    orderStatus: 0,
    statusDescription: 'Pedro',
    items: [],
    creationDateTime: 1,
    restaurantCode: 1
  }
  constructor(private pedidoService: PedidosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.pedidoService.getPedido(params.orderId)
      .subscribe(
        res => {
          console.log(res);
          this.pedido = res;
          console.log(this.pedido);
        },
        err => console.error(err)
      )
  }
  cambiarEstado() {
    if (this.pedido.orderStatus == 1) {
      this.pedido.orderStatus = 2;
    }
    else {
      this.pedido.orderStatus = 1;
    }
  }
  updatePedido() {
    // this.pedido.status=2;
    //   console.log(this.pedido);

    this.pedidoService.updatePedido(this.pedido.orderId, this.pedido)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pedidos']);
        },
        err => console.error(err)
      )
  }

}
