import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/LoginUsuario';
import { NuevoUsuario } from '../models/NuevoUsuario';
import { JwtDto } from '../models/JwtDto';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {  

 URL = 'https://portfoliosantorosabrina.herokuapp.com/auth/';


 currentUserSubject: BehaviorSubject<any>;

  constructor(private httpClient:HttpClient)
   {
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)
 }
  

     
get UsuarioAutenticado (){
  return this.currentUserSubject.value;
}

public logout(){
  sessionStorage.removeItem('currentUser');
}

public isUserLogged():boolean{
  return sessionStorage.getItem('currentUser')!== null;
}

}
 
