import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../services/editorial.service';
import { Editorial } from '../models/editorial';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-agregar-editorial',
  templateUrl: './agregar-editorial.component.html',
  styleUrls: ['./agregar-editorial.component.css']
})
export class AgregarEditorialComponent implements OnInit {

  editorial: Editorial;
  editorials:Editorial[];
  constructor(private editorialService: EditorialService) { }
  ngOnInit() {
    this.editorial = new Editorial();
  }

  add(): void {
    if (!this.editorial) { return; }
    this.editorialService.addEditorial(this.editorial)
      .subscribe( editorial  => {
          alert('Se Agrego Un Nuevo Editorial =>'+this.editorial.id);
             });
  }
}
