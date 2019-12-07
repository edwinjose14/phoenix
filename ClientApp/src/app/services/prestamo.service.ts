import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private globalUrl = this.baseUrl + 'api/prestamo';  // URL to web api
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.globalUrl, prestamo, this.httpOptions).pipe(
      tap((newPrestamo: Prestamo) => this.log(`Se Registro el Prestamo Con El Id=${newPrestamo.id}`)),
      catchError(this.handleError<Prestamo>('addPrestamo'))
    );
  }

  /* GET heroes whose name contains search term */
  searchPrestamo(id: number): Observable<Prestamo> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Prestamo>(`${this.globalUrl}/${id}`).pipe(
      tap(_ => this.log(`Se Encontro El Prestamo ${id}`)),
      catchError(this.handleError<Prestamo>(`searchPrestamo id=${id}`))
    );
  }


  getPrestamo(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.globalUrl).pipe(
      tap(prestamos => {
        return this.log('Lista de Prestamos');
      }),
      catchError(this.handleError<Prestamo[]>('getPrestamo', [])));
  }

  /** DELETE: delete the Task from the server */
  deletePrestamo(prestamo: Prestamo | number): Observable<Prestamo> {
    const id = typeof prestamo === 'number' ? prestamo : prestamo.id;
    const url = `${this.globalUrl}/${id}`;

    return this.http.delete<Prestamo>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se Eliminó El Prestamo Con Id=${id}`)),
      catchError(this.handleError<Prestamo>('deletePrestamo'))
    );
  }

  /** PUT: update the hero on the server */
  updatePrestamo(prestamo: Prestamo | number): Observable<any> {
    const id = typeof prestamo === 'number' ? prestamo : prestamo.id;
    const url = `${this.globalUrl}/${id}`;
    return this.http.put(url, prestamo, this.httpOptions).pipe(
      tap(_ => this.log(`Se Actualizo El Prestamo Con Id=${id}`)),
      catchError(this.handleError<any>('updatePrestamo'))
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
