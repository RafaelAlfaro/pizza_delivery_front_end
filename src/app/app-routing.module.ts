import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/pedidos',
    pathMatch:'full'
  },
  {
    path:'pedidos',
    component: PedidoListComponent
  },
  {
    path:'pedidos/edit/:id',
    component: PedidoFormComponent
  },
  {
    path:'pedidosEntregados',
    component: PedidoListComponent
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
