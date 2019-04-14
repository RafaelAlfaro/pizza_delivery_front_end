import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedido-entregados',
  templateUrl: './pedido-entregados.component.html',
  styleUrls: ['./pedido-entregados.component.css']
})
export class PedidoEntregadosComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  orders: any = [];
  _MS_PER_DAY: any = 1000 * 60 * 60 * 24;

  constructor(private pedidosService: PedidosService) { }


  // a and b are javascript Date objects
  dateDiffInDays(a: Date, b: Date) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }

  ngOnInit() {
    this.getPedidos();
  }
  
  getPedidos() {
    this.pedidosService.getOrderServices().subscribe(
      (res: any[]) => {
        this.orders = res;
      },
      err => console.error(err)
    )
  }

  formatTimeService(serverStart: string, serverEnd: string) {
    let date1 = new Date(serverStart);
    let date2 = new Date(serverEnd);
    var deltaTime = this.dateDiffInDays(date2, date1);
    return deltaTime;
  }
}
