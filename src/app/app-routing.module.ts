import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoCreadosComponent } from './components/pedido-creados/pedido-creados.component';
import { PedidoEntregadosComponent } from './components/pedido-entregados/pedido-entregados.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pedidos',
    pathMatch: 'full'
  },
  {
    path: 'pedidos',
    component: PedidoCreadosComponent
  },
  {
    path: 'pedidos/edit/:orderId',
    component: PedidoFormComponent
  },
  {
    path: 'pedidosEntregados',
    component: PedidoEntregadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
