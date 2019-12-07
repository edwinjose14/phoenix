import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Libro } from '../models/libro';
import { Autor } from '../models/autor';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private globalUrl = this.baseUrl + 'api/libro';  // URL to web api
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.globalUrl, libro, this.httpOptions).pipe(
      tap((newLibro: Libro) => this.log(`Se Registro el Libro Con El Id=${newLibro.id}`)),
      catchError(this.handleError<Libro>('addLibro'))
    );
  }

  /* GET heroes whose name contains search term */
  searchLibro(id: number): Observable<Libro> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Libro>(`${this.globalUrl}/${id}`).pipe(
      tap(_ => this.log(`Se Encontro El Libro ${id}`)),
      catchError(this.handleError<Libro>(`searchLibro id=${id}`))
    );
  }


  getLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.globalUrl).pipe(
      tap(tasks => {
        return this.log('Lista de Libros');
      }),
      catchError(this.handleError<Libro[]>('getLibro', [])));
  }
  getAutor(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.globalUrl).pipe(
      tap(tasks => {
        return this.log('Lista de Autores');
      }),
      catchError(this.handleError<Autor[]>('getAutor', [])));
  }
  getEditorial(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.globalUrl).pipe(
      tap(tasks => {
        return this.log('Lista de Editoriales');
      }),
      catchError(this.handleError<Editorial[]>('getEditorial', [])));
  }

  /** DELETE: delete the Task from the server */
  deleteLibro(libro: Libro | number): Observable<Libro> {
    const id = typeof libro === 'number' ? libro : libro.id;
    const url = `${this.globalUrl}/${id}`;

    return this.http.delete<Libro>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se Eliminó El Libro Con Id=${id}`)),
      catchError(this.handleError<Libro>('deleteLibro'))
    );
  }

  /** PUT: update the hero on the server */
  updateLibro(libro: Libro | number): Observable<any> {
    const id = typeof libro === 'number' ? libro : libro.id;
    const url = `${this.globalUrl}/${id}`;
    return this.http.put(url, libro, this.httpOptions).pipe(
      tap(_ => this.log(`Se Actualizo El Libro Con Id=${id}`)),
      catchError(this.handleError<any>('updateLibro'))
    );
  }

  private log(message: string) {
    // this.messageService.add(`taskService: ${message}`);
    alert(`libroService: ${message}`);
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
