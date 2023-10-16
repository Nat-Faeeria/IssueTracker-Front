import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/users'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: Number): Observable<User> {
    return this.http.get<User>(this.url+"/"+id);
  }

  update(user: User): Observable<any> {
    let updateUrl = this.url + "/" + user.id
    return this.http.put(updateUrl, user, this.httpOptions).pipe(catchError(this.handleError<any>('updateUser')))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
