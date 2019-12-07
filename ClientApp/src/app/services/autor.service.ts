import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private autorUrl = this.baseUrl + 'api/autor';  // URL to web api
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.autorUrl, autor, this.httpOptions).pipe(
      tap((newAutor: Autor) => this.log(`Se Registro el Autor Con El Id=${newAutor.id}`)),
      catchError(this.handleError<Autor>('addAutor'))
    );
  }

  /* GET heroes whose name contains search term */
  searchAutor(id: number): Observable<Autor> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Autor>(`${this.autorUrl}/${id}`).pipe(
      tap(_ => this.log(`Se Encontro El Autor ${id}`)),
      catchError(this.handleError<Autor>(`searchAutor id=${id}`))
    );
  }


  getAutor(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.autorUrl).pipe(
      tap(tasks => {
        return this.log('Lista de Autores');
      }),
      catchError(this.handleError<Autor[]>('getAutor', [])));
  }

  /** DELETE: delete the Task from the server */
  deleteAutor(autor: Autor | number): Observable<Autor> {
    const id = typeof autor === 'number' ? autor : autor.id;
    const url = `${this.autorUrl}/${id}`;

    return this.http.delete<Autor>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se Eliminó El Autor Con Id=${id}`)),
      catchError(this.handleError<Autor>('deleteAutor'))
    );
  }

  /** PUT: update the hero on the server */
  updateAutor(autor: Autor | number): Observable<any> {
    const id = typeof autor === 'number' ? autor : autor.id;
    const url = `${this.autorUrl}/${id}`;
    return this.http.put(url, autor, this.httpOptions).pipe(
      tap(_ => this.log(`Se Actualizo El Autor Con Id=${id}`)),
      catchError(this.handleError<any>('updateAutor'))
    );
  }

  private log(message: string) {
    // this.messageService.add(`taskService: ${message}`);
    alert(`autorService: ${message}`);
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
