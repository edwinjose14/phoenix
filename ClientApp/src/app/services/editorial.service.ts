import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private globalUrl = this.baseUrl + 'api/editorial';  // URL to web api
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(this.globalUrl, editorial, this.httpOptions).pipe(
      tap((newEditorial: Editorial) => this.log(`Se Registro el Editorial Con El Id=${newEditorial.id}`)),
      catchError(this.handleError<Editorial>('addEditorial'))
    );
  }

  /* GET heroes whose name contains search term */
  searchEditorial(id: number): Observable<Editorial> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Editorial>(`${this.globalUrl}/${id}`).pipe(
      tap(_ => this.log(`Se Encontro El Editorial ${id}`)),
      catchError(this.handleError<Editorial>(`searchEditorial id=${id}`))
    );
  }


  getEditorial(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.globalUrl).pipe(
      tap(tasks => {
        return this.log('Lista de Editoriales');
      }),
      catchError(this.handleError<Editorial[]>('getEditorial', [])));
  }

  /** DELETE: delete the Task from the server */
  deleteEditorial(editorial: Editorial | number): Observable<Editorial> {
    const id = typeof editorial === 'number' ? editorial : editorial.id;
    const url = `${this.globalUrl}/${id}`;

    return this.http.delete<Editorial>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se Eliminó El Editorial Con Id=${id}`)),
      catchError(this.handleError<Editorial>('deleteEditorial'))
    );
  }

  /** PUT: update the hero on the server */
  updateEditorial(editorial: Editorial | number): Observable<any> {
    const id = typeof editorial === 'number' ? editorial : editorial.id;
    const url = `${this.globalUrl}/${id}`;
    return this.http.put(url, editorial, this.httpOptions).pipe(
      tap(_ => this.log(`Se Actualizo El Editorial Con Id=${id}`)),
      catchError(this.handleError<any>('updateEditorial'))
    );
  }

  private log(message: string) {
    // this.messageService.add(`taskService: ${message}`);
    alert(`editorialService: ${message}`);
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
