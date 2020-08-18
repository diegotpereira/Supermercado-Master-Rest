import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVentaComponent } from './view-venta.component';

describe('ViewVentaComponent', () => {
  let component: ViewVentaComponent;
  let fixture: ComponentFixture<ViewVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
