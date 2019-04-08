import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEntregadoListComponent } from './pedido-entregado-list.component';

describe('PedidoEntregadoListComponent', () => {
  let component: PedidoEntregadoListComponent;
  let fixture: ComponentFixture<PedidoEntregadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoEntregadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEntregadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
