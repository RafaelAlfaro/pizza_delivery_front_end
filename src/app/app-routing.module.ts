import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PedidoEntregadoListComponent } from './components/pedido-entregado-list/pedido-entregado-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/pedidos',
    pathMatch: 'full'
  },
  {
    path: 'pedidos',
    component: PedidoListComponent
  },
  {
    path: 'pedidos/edit/:orderId',
    component: PedidoFormComponent
  },
  {
    path: 'pedidosEntregados',
    component: PedidoEntregadoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
