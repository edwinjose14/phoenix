import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDevolucionComponent } from './editar-devolucion.component';

describe('EditarDevolucionComponent', () => {
  let component: EditarDevolucionComponent;
  let fixture: ComponentFixture<EditarDevolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDevolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
