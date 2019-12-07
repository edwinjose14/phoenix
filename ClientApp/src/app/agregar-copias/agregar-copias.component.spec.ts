import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCopiasComponent } from './agregar-copias.component';

describe('AgregarCopiasComponent', () => {
  let component: AgregarCopiasComponent;
  let fixture: ComponentFixture<AgregarCopiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCopiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCopiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
