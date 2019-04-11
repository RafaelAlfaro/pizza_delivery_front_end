import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidosService } from './services/pedidos.service';
import { PedidoCreadosComponent } from './components/pedido-creados/pedido-creados.component';
import { PedidoEntregadosComponent } from './components/pedido-entregados/pedido-entregados.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PedidoFormComponent,
    PedidoListComponent,
    PedidoCreadosComponent,
    PedidoEntregadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
