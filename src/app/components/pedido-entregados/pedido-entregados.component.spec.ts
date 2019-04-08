import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEntregadosComponent } from './pedido-entregados.component';

describe('PedidoEntregadosComponent', () => {
  let component: PedidoEntregadosComponent;
  let fixture: ComponentFixture<PedidoEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
