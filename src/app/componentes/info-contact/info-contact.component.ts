import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InformaciondeContacto } from 'src/app/models/InformaciondeContacto';
import { InfodeContactoService } from 'src/app/servicios/infode-contacto.service';
import { TokenService } from 'src/app/servicios/token.service';

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
  usuarioAdmin: Boolean| undefined;

  constructor(public infodecontactoService: InfodeContactoService,private tokenService:TokenService,
    public dialogRef: MatDialogRef<InfoContactComponent>
    ) { }

  ngOnInit(): void {
    this.getContact();
    this.usuarioAdmin = this.tokenService.IsAdmin();
  }

  public getContact(): void {
    this.infodecontactoService.getinformaciondeContacto().subscribe({
      next: (Response: InformaciondeContacto[]) => {
        this.informaciondeContacto = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  editar() {
    this.FormVisibility = true;
  }

  onSubmit(info: InformaciondeContacto): void {
    this.FormVisibility = false;
    document.getElementById('texto')?.click();
    this.infodecontactoService.editinformaciondeContacto(info).subscribe({
      next: (Response: InformaciondeContacto) => {
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