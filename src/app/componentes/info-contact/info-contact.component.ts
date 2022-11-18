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
  informaciondeContacto: InformaciondeContacto[] = [];
  public editInfodecontacto: InformaciondeContacto | undefined;
  public deleteInfodecontacto: InformaciondeContacto | undefined;
  FormVisibility: boolean = false;

  constructor(public infodecontactoService: InfodeContactoService,
    public dialogRef: MatDialogRef<InfoContactComponent>
  ) { }

  ngOnInit(): void {
    this.getContact();
    console.log(this.informaciondeContacto)
  }

  public getContact(): void {
    this.infodecontactoService.getinformaciondeContacto().subscribe({
      next: (Response: InformaciondeContacto[]) => {
        this.informaciondeContacto = Response;
        console.log(this.informaciondeContacto)
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  editar() {
    console.log("funciona")
    this.FormVisibility = true;
  }

  onSubmit(info: InformaciondeContacto): void {
    this.FormVisibility = false;
    document.getElementById('texto')?.click();
    this.infodecontactoService.editinformaciondeContacto(info).subscribe({
      next: (Response: InformaciondeContacto) => {
        console.log(Response);
        this.getContact()
      }, error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  cerrar() {
    this.dialogRef.close();
  }

}