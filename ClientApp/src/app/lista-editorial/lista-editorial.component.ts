import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../services/editorial.service';
import { Editorial } from '../models/editorial';

@Component({
  selector: 'app-lista-editorial',
  templateUrl: './lista-editorial.component.html',
  styleUrls: ['./lista-editorial.component.css']
})
export class ListaEditorialComponent implements OnInit {

  editorials: Editorial[];
  constructor(private editorialService: EditorialService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.editorialService.getEditorial().subscribe(editorials => {
      return this.editorials = editorials;
    });
    }
}
