import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'https://portfoliosantorosabrina.herokuapp.com/api';

  constructor(private http: HttpClient) { }
  
    public getSkills () : Observable <skills[]>{
    return this.http.get<skills[]> (`${this.URL}/Skills/traer`);
    }

    public deleteSkills(SkillsId: number) : Observable <void> {
      return this.http.delete<void> (`${this.URL}/Skills/borrar/${SkillsId}`);
          }
     
 public editSkills (Skills: skills) : Observable <skills> {
 return this.http.put<skills> (`${this.URL}/Skills/editar`, Skills);
 }
     
     public createSkills (Skills: skills) : Observable <skills> {
      return this.http.post<skills> (`${this.URL}/Skills/crear`, Skills);
        }

}