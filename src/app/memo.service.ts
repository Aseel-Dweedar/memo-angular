import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Memo } from './models/Memo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MemoService {
  private apiServerUrl = "";

  constructor(private http: HttpClient) { }

  public getMemos(): Observable<Memo[]> {
    return this.http.get<Memo[]>(`${this.apiServerUrl}`)
  }

  public getMemo(id: number): Observable<Memo> {
    return this.http.get<Memo>(`${this.apiServerUrl}/${id}`)
  }

  public addMemo(memo: Memo): Observable<Memo> {
    return this.http.post<Memo>(`${this.apiServerUrl}/add`, memo)
  }

  public updateMemo(memo: Memo): Observable<Memo> {
    return this.http.put<Memo>(`${this.apiServerUrl}/update/${memo.id}`, memo)
  }

  public updateMemoLikes(memo: Memo): Observable<Memo> {
    return this.http.put<Memo>(`${this.apiServerUrl}/update/likes/${memo.id}`, memo)
  }

  public deleteMemo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`)
  }
}