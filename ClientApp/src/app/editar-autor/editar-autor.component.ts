import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from '../services/autor.service';
import { Autor } from '../models/autor';
import { Location } from '@angular/common';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {
autor: Autor;
@Input() title;
  constructor(private route: ActivatedRoute,
    private autorService: AutorService ,
    private location: Location) {this.autor =new Autor(); }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.autorService.searchAutor(id)
      .subscribe( t => this.autor = t);
  }
}
