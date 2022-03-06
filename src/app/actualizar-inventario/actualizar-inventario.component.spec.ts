import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInventarioComponent } from './actualizar-inventario.component';

describe('ActualizarInventarioComponent', () => {
  let component: ActualizarInventarioComponent;
  let fixture: ComponentFixture<ActualizarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
