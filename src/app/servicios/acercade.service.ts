import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../models/Acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  private URL = 'https://portfoliosantorosabrina.herokuapp.com/api/Acercade';

  constructor(private http: HttpClient) { }

  public getAcercade(): Observable<Acercade[]> {
    return this.http.get<Acercade[]>(`${this.URL}/traer`);
  }

  public deleteAcercade(acercadeId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/borrar/${acercadeId}`);
  }

  public editAcercade(acercade: Acercade): Observable<Acercade> {
    return this.http.put<Acercade>(`${this.URL}/editar/`, acercade);
  }

  public createAcercade(acercade: Acercade): Observable<Acercade> {
    return this.http.post<Acercade>(`${this.URL}/crear/`, acercade);
  }

}


