import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../models/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private URL = 'https://portfoliosantorosabrina.herokuapp.com/api';

  constructor(private http: HttpClient) { }
  
    public getProyectos () : Observable <proyectos[]>{
    return this.http.get<proyectos[]> (`${this.URL}/proyectos/traer`);
   }

    public deleteProyectos(IdPro: number) : Observable <void> {
      return this.http.delete<void> (`${this.URL}/proyectos/borrar/${IdPro}`);
          }
     
   public editProyectos (proyectos: proyectos) : Observable <proyectos> {
   return this.http.put<proyectos> (`${this.URL}/proyectos/editar`, proyectos);
   }

     public createProyectos (Proyectos: proyectos) : Observable <proyectos> {
      return this.http.post<proyectos> (`${this.URL}/proyectos/crear`, Proyectos);
        }
  }
