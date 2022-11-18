import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encabezado } from '../models/Encabezado';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {
  URL = 'https://portfoliosantorosabrina.herokuapp.com/api/encabezado';

  constructor(private http: HttpClient) { }
   
  public getEncabezado(): Observable<Encabezado[]>{
    return this.http.get<Encabezado[]> (`${this.URL}/traer`);
    }
   
    public deleteEncabezado(encabezadoId: number) : Observable <void> {
    return this.http.delete<void> (this.URL+`borrar/${encabezadoId}`);
        }
   
 public editEncabezado (encabezado: Encabezado) : Observable <Encabezado> {
  return this.http.put<Encabezado> (this.URL+'editar/', encabezado);
          }
   
   public createEncabezado (encabezado: Encabezado) : Observable <Encabezado> {
    return this.http.post<Encabezado> (this.URL+'crear/', encabezado);
      }
}
  