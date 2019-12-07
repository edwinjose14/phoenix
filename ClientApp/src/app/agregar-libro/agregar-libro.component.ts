import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro';
import { Autor } from '../models/autor';
import { Editorial } from '../models/editorial';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {


  libro: Libro;
  libros: Libro[];
  autors: Autor[];
  editorial: Editorial[];
  constructor(private libroService: LibroService) { }
  ngOnInit() {
    this.libro = new Libro();
    this.getEditorial();
    this.getAutor();
  }

  add(): void {
    if (!this.libro) { return; }
    this.libroService.addLibro(this.libro)
      .subscribe(libro => {
        alert('Se Agrego Un Nuevo Libro =>' + this.libro.id);
      });
  }
  getAutor(){
    this.libroService.getAutor().subscribe(autors => {
      return this.autors = autors;
    });
  }

  getEditorial(){
    this.libroService.getEditorial().subscribe(edi => {
      return this.editorial = edi;
    });
  }

  
}
