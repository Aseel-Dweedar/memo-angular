import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Memo } from '../models/Memo';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class MemoService {

  private apiServerUrl = environment.apiBaseUrl;

  // inject the httpClient so we can use it
  constructor(private http: HttpClient) { }

  // Observable is the items that return from http response
  public getMemos(): Observable<Memo[]> {
    return this.http.get<Memo[]>(`${this.apiServerUrl}`)
  }


  // we can also do it like this ==>
  /*
  import { catchError, tap } from "rxjs/operators";
  // the "$" make it Observable
  memos$ = <Observable<Memo[]>>
  this.http.get<Memo[]>(`${this.apiServerUrl}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  handleError(handleError: any): Observable<never> {
    throw new Error("Method not implemented.");
  }
  */

  public getMemo(id: number): Observable<Memo> {
    return this.http.get<Memo>(`${this.apiServerUrl}/${id}`)
  }

  public addMemo(memo: Memo): Observable<Memo> {
    return this.http.post<Memo>(`${this.apiServerUrl}/add`, memo)
  }

  public updateMemo(memo: Memo, id: number): Observable<Memo> {
    return this.http.put<Memo>(`${this.apiServerUrl}/update/${id}`, memo)
  }

  public updateMemoLikes(id: number): Observable<Memo> {
    return this.http.put<Memo>(`${this.apiServerUrl}/update/likes/${id}`, null)
  }

  public deleteMemo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`)
  }

}