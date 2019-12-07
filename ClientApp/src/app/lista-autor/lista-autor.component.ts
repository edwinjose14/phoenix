import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { Autor } from '../models/autor';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { EditarAutorComponent } from '../editar-autor/editar-autor.component';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autor.component.html',
  styleUrls: ['./lista-autor.component.css']
})
export class ListaAutorComponent implements OnInit {

  autors: Autor[];
  constructor(private autorService: AutorService,
    ) { }


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.autorService.getAutor().subscribe(autors => {
      return this.autors = autors;
    });
  }
}
