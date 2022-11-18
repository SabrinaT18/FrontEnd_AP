import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia_laboral } from '../models/Experiencia_laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
URL = 'https://portfoliosantorosabrina.herokuapp.com/api/experiencia';
  
constructor(private http:HttpClient) { }

public  getExperiencia_laboral():Observable<experiencia_laboral[]>{
  return this.http.get<experiencia_laboral[]>(`${this.URL}/traer`);
}

public createExperiencia_laboral(experiencias: experiencia_laboral):Observable<experiencia_laboral>{
  return this.http.post<experiencia_laboral>(`${this.URL}/crear`, experiencias);
}
public editExperiencia_laboral(experiencias: experiencia_laboral):Observable<experiencia_laboral>{
  return this.http.put<experiencia_laboral>(`${this.URL}/editar`,experiencias);
}

public deleteExperiencia_laboral(idExp: number):Observable<void>{
  return this.http.delete<void>(`${this.URL}/borrar/${idExp}`);
}
}