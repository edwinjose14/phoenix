import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private globalUrl = this.baseUrl + 'api/usuario';  // URL to web api
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.globalUrl, usuario, this.httpOptions).pipe(
      tap((newUsuario: Usuario) => this.log(`Se Registro el Usuario Con El Id=${newUsuario.identificacion}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  /* GET heroes whose name contains search term */
  searchUsuario(id: number): Observable<Usuario> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Usuario>(`${this.globalUrl}/${id}`).pipe(
      tap(_ => this.log(`Se Encontro El Usuario ${id}`)),
      catchError(this.handleError<Usuario>(`searchUsuario id=${id}`))
    );
  }


  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.globalUrl).pipe(
      tap(usuarios => {
        return this.log('Lista de Usuarios');
      }),
      catchError(this.handleError<Usuario[]>('getUsuario', [])));
  }

  /** DELETE: delete the Task from the server */
  deleteUsuario(usuario: Usuario | number): Observable<Usuario> {
    const id = typeof usuario === 'number' ? usuario : usuario.identificacion;
    const url = `${this.globalUrl}/${id}`;

    return this.http.delete<Usuario>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se Eliminó El Usuario Con Id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  /** PUT: update the hero on the server */
  updateUsuario(usuario: Usuario | number): Observable<any> {
    const id = typeof usuario === 'number' ? usuario : usuario.identificacion;
    const url = `${this.globalUrl}/${id}`;
    return this.http.put(url, usuario, this.httpOptions).pipe(
      tap(_ => this.log(`Se Actualizo El Usuario Con Id=${id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  private log(message: string) {
    // this.messageService.add(`taskService: ${message}`);
    alert(`usuarioService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} Fallo: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

