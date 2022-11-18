import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://portfoliosantorosabrina.herokuapp.com/api/persona';

constructor(private http: HttpClient) { }

public getPersona() : Observable <Persona[]>{
  return this.http.get<Persona[]> (`${this.URL}/traer`);
}

 public deletePersona(personaId: number) : Observable <void>{
  return this.http.delete<void> (`${this.URL}/persona/delete/${personaId}`);
 }

public editPersona (persona: Persona) : Observable <Persona>{
  return this.http.put<Persona> (`${this.URL}/persona/editar/`, persona);
}
}
