import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InformaciondeContacto } from 'src/app/models/InformaciondeContacto';
import { InfodeContactoService } from 'src/app/servicios/infode-contacto.service';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.css']
})
export class InfoContactComponent implements OnInit {
  informaciondeContacto:InformaciondeContacto []=[];
  public editInfodecontacto: InformaciondeContacto |  undefined;
  public deleteInfodecontacto: InformaciondeContacto | undefined ;

  constructor(public infodecontactoService: InfodeContactoService,
      public dialogRef: MatDialogRef<InfoContactComponent>
) { }

  ngOnInit(): void {
    this.getContact();
    console.log(this.informaciondeContacto)
  }

  public getContact(): void{
    this.infodecontactoService.getinformaciondeContacto().subscribe({
      next:(Response:InformaciondeContacto[]) =>{
      this.informaciondeContacto=Response;
      console.log(this.informaciondeContacto)
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      } 
    });
  }

public onOpenModal (mode: String, InformaciondeContacto?: InformaciondeContacto) : void {
const container =document.getElementById ('modal-container');
const button= document.createElement ('button');
button.setAttribute('data-toggle', 'modal');
if (mode === 'edit') {
  this.editInfodecontacto= InformaciondeContacto;
button.setAttribute ('data-target', '#updateInformacióndeContacto' );  
} else if (mode === 'delete'){
  this.deleteInfodecontacto= InformaciondeContacto;
button.setAttribute ('data-target', '#deleteInformacióndeContacto' );  
}
container?.appendChild(button); 
    button.click();
}

cerrar() {
  this.dialogRef.close();
}

}