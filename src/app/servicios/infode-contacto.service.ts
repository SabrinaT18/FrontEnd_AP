import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformaciondeContacto } from '../models/InformaciondeContacto';

@Injectable({
  providedIn: 'root'
})
export class InfodeContactoService {

  URL = 'https://portfoliosantorosabrina.herokuapp.com/api/infodecontacto/';


  constructor(private http: HttpClient) { }

  public getinformaciondeContacto(): Observable <InformaciondeContacto[]>{
  return this.http.get<InformaciondeContacto[]> (this.URL+'traer');
 }

 public deleteinformaciondeContacto(informaciondeContactoId: number) : Observable <void> {
  return this.http.delete<void> (this.URL+`borrar/${informaciondeContactoId}`);
      }
 
public editinformaciondeContacto (informaciondeContacto: InformaciondeContacto) : Observable <InformaciondeContacto> {
return this.http.put<InformaciondeContacto> (this.URL+'editar/', informaciondeContacto);
        }
 
 public createinformaciondeContacto (informaciondeContacto: InformaciondeContacto) : Observable <InformaciondeContacto> {
  return this.http.post<InformaciondeContacto> (this.URL+'/crear/', informaciondeContacto);
    }

}