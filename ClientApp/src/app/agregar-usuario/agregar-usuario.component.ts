import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
    this.usuario = new Usuario();
  }

  add(): void {
    if (!this.usuario) { return; }
    this.usuarioService.addUsuario(this.usuario)
      .subscribe(autor => {
        alert('Se Agrego Un Nuevo Usuario =>' + this.usuario.identificacion);
      });
  }
}