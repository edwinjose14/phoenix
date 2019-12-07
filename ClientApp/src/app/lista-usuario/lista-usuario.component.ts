import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.usuarioService.getUsuario().subscribe(usuarios => {
      return this.usuarios = usuarios;
    });
    }

}
