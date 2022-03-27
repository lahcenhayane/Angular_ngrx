import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';

const END_POINT = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${END_POINT}/authors`);
  }
}
