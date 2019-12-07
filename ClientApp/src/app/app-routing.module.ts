import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AgregarLibroComponent} from './agregar-libro/agregar-libro.component';
import { AgregarAutorComponent} from './agregar-autor/agregar-autor.component';
import {AgregarPrestamoComponent} from './agregar-prestamo/agregar-prestamo.component';
import { AgregarEditorialComponent} from './agregar-editorial/agregar-editorial.component';
import { AgregarCopiasComponent} from './agregar-copias/agregar-copias.component';
import { ListaAutorComponent} from './lista-autor/lista-autor.component';
import { ListaEditorialComponent} from './lista-editorial/lista-editorial.component';
import { ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';
import { ListaPrestamoComponent} from './lista-prestamo/lista-prestamo.component';
import { EditarAutorComponent} from './editar-autor/editar-autor.component';


const routes: Routes = [
  {path:'agregarLibro', component:AgregarLibroComponent},
  {path:'agregarUsuario', component:AgregarUsuarioComponent},
  {path:'agregarAutor', component:AgregarAutorComponent},
  {path:'agregarEditorial', component:AgregarEditorialComponent},
  {path:'agregarPrestamo', component:AgregarPrestamoComponent},
  {path:'agregarCopias', component:AgregarCopiasComponent},
  {path:'listaAutor', component:ListaAutorComponent},
  {path:'listaEditorial', component:ListaEditorialComponent},
  {path:'listaUsuario', component:ListaUsuarioComponent},
  {path:'listaPrestamo', component:ListaPrestamoComponent},
  {path:'editarAutor', component:EditarAutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
