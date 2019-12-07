import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgregarCopiasComponent } from './agregar-copias/agregar-copias.component';
import { ListaCopiasComponent } from './lista-copias/lista-copias.component';
import { EditarCopiasComponent } from './editar-copias/editar-copias.component';
import { AgregarDevolucionComponent } from './Devolucion/agregar-devolucion/agregar-devolucion.component';
import { ListaDevolucionComponent } from './Devolucion/lista-devolucion/lista-devolucion.component';
import { EditarDevolucionComponent } from './Devolucion/editar-devolucion/editar-devolucion.component';
import { AgregarEditorialComponent } from './agregar-editorial/agregar-editorial.component';
import { ListaEditorialComponent } from './lista-editorial/lista-editorial.component';
import { EditarEditorialComponent } from './editar-editorial/editar-editorial.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { ListaPrestamoComponent } from './lista-prestamo/lista-prestamo.component';
import { AgregarPrestamoComponent } from './agregar-prestamo/agregar-prestamo.component';
import { EditarPrestamoComponent } from './editar-prestamo/editar-prestamo.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    NgbModule,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AgregarAutorComponent,
    ListaAutorComponent,
    EditarAutorComponent,
    AgregarCopiasComponent,
    ListaCopiasComponent,
    EditarCopiasComponent,
    AgregarDevolucionComponent,
    ListaDevolucionComponent,
    EditarDevolucionComponent,
    AgregarEditorialComponent,
    ListaEditorialComponent,
    EditarEditorialComponent,
    EditarLibroComponent,
    AgregarLibroComponent,
    ListaLibroComponent,
    ListaPrestamoComponent,
    AgregarPrestamoComponent,
    EditarPrestamoComponent,
    EditarUsuarioComponent,
    AgregarUsuarioComponent,
    ListaUsuarioComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  //entryComponents:[EditarAutorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
