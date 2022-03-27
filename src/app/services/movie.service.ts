import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

const END_POINT = 'http://localhost:8080/api/v1';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${END_POINT}`);
  }

  get(id: any): Observable<Movie> {
    return this.http.get(`${END_POINT}/${id}`);
  }

  create(data: Movie): Observable<Movie> {
    return this.http.post(`${END_POINT}/movie`, data);
  }

  update(id: any, data: Movie): Observable<Movie> {
    return this.http.put(`${END_POINT}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${END_POINT}/${id}`);
  }
}
