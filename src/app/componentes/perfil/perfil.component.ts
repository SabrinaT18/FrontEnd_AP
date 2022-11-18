import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { InfoContactComponent } from '../info-contact/info-contact.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona:Persona[]=[];
  public editarPersona:Persona | undefined
  FormVisibility : boolean = false;

  constructor(private personaService: PersonaService, private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
     this.getPersona();
     console.log(this.persona);
  }

 public getPersona(): void {
  this.personaService.getPersona().subscribe ({
    next: (response: Persona[]) => {
    this.persona=response;
   },
  error:(error: HttpErrorResponse) => {
    alert(error.message);
  }
})
}

editarTexto (){
  console.log("funciona")
  this.FormVisibility=true;
   }

 
onSubmit (persona: Persona) : void {
  this.FormVisibility= false; 
  document.getElementById ('texto')?.click ();
this.personaService.editPersona(persona).subscribe ({
  next: (Response: Persona) => {
    console.log(Response);
    this.getPersona()
  }, error: (error: HttpErrorResponse) => {
    alert (error.message)
  }
}) 
}

abrirInfo() {
const dialogRef = this.dialog.open(InfoContactComponent, {
  width: '750px',
});
}

}
