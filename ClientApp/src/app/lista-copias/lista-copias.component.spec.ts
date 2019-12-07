import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCopiasComponent } from './lista-copias.component';

describe('ListaCopiasComponent', () => {
  let component: ListaCopiasComponent;
  let fixture: ComponentFixture<ListaCopiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCopiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCopiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
