import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCopiasComponent } from './editar-copias.component';

describe('EditarCopiasComponent', () => {
  let component: EditarCopiasComponent;
  let fixture: ComponentFixture<EditarCopiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCopiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCopiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
