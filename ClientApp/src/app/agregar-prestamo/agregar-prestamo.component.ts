import { Component, OnInit } from '@angular/core';
import {PrestamoService } from '../services/prestamo.service';
import { Prestamo} from '../models/prestamo';

@Component({
  selector: 'app-agregar-prestamo',
  templateUrl: './agregar-prestamo.component.html',
  styleUrls: ['./agregar-prestamo.component.css']
})
export class AgregarPrestamoComponent implements OnInit {

  prestamo: Prestamo;
  prestamos:Prestamo[];
  constructor(private prestamoService: PrestamoService) { }
  ngOnInit() {
    this.prestamo = new Prestamo();
  }

  add(): void {
    if (!this.prestamo) { return; }
    this.prestamoService.addPrestamo(this.prestamo)
      .subscribe( prestamo  => {
          alert('Se Agrego Un Nuevo Prestamo =>'+this.prestamo.id);
             });
  }
}
