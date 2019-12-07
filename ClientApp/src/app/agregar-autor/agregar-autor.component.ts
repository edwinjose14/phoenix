import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { Autor } from '../models/autor';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-agregar-autor',
  templateUrl: './agregar-autor.component.html',
  styleUrls: ['./agregar-autor.component.css']
})
export class AgregarAutorComponent implements OnInit {

  autor: Autor;
  autors:Autor[];
  constructor(private autorService: AutorService) { }
  ngOnInit() {
    this.autor = new Autor();
  }

  add(): void {
    if (!this.autor) { return; }
    this.autorService.addAutor(this.autor)
      .subscribe( autor  => {
          alert('Se Agrego Un Nuevo Autor =>'+this.autor.id);
             });
  }
}
