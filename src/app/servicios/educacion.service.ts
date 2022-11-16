import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private URL = 'https://portfoliosantorosabrina.herokuapp.com/api'

  constructor(private http: HttpClient) { }
  
    public getEducacion () : Observable <educacion[]>{
    return this.http.get<educacion[]> (`${this.URL}/educacion/traer`);
    }
   
 
    public deleteEducacion (IdEd: number) : Observable <void> {
      return this.http.delete<void> (`${this.URL}/educacion/borrar/${IdEd}`);
 }
     
   public editarEducacion (educacion: educacion): Observable <educacion> {
    return this.http.put<educacion> (`${this.URL}/educacion/editar`, educacion);
    }
     
   public addEducacion (educacion: educacion) : Observable <educacion> {
      return this.http.post<educacion> (`${this.URL}/educacion/crear`, educacion);
        }
      
      }