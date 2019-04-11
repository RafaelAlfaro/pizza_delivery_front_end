import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCreadosComponent } from './pedido-creados.component';

describe('PedidoCreadosComponent', () => {
  let component: PedidoCreadosComponent;
  let fixture: ComponentFixture<PedidoCreadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCreadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
