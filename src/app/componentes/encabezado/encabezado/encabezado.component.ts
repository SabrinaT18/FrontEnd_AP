import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Encabezado } from 'src/app/models/Encabezado';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';
import { TokenService } from '../../../servicios/token.service';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  encabezado: Encabezado[] = [];
  FormVisibilty: boolean = false;
  public editarEnc: Encabezado | undefined;
  public deleteEnc: Encabezado | undefined;
  usuarioAdmin: Boolean| undefined;

  constructor(public encabezadoService: EncabezadoService,
    public tokenService: TokenService) { }


  ngOnInit(): void {
    this.getEncabezado();
    this.usuarioAdmin = this.tokenService.IsAdmin();
    console.log(this.encabezado)
  }

  public getEncabezado(): void {
    this.encabezadoService.getEncabezado().subscribe({
      next: (Response: Encabezado[]) => {
        this.encabezado = Response;
        console.log(this.encabezado)
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  cerrarSesion()
{
  this.tokenService.logOut()
}

  public onOpenModal(mode: String, encabezado?: Encabezado): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEncModal');
    } else if (mode === 'delete') {
      this.deleteEnc = encabezado;
      button.setAttribute('data-target', '#deleteEncModal');
    } else if (mode === 'edit') {
      this.editarEnc = encabezado;
      button.setAttribute('data-target', '#editEncModal');
    }
    container?.appendChild(button); 
    button.click();
    console.log("llama a la funcion");
  }

  public onAddEnc(addForm: NgForm): void {
    document.getElementById('add-Enc-form')?.click();
    this.encabezadoService.createEncabezado(addForm.value).subscribe({
      next: (response: Encabezado) => {
        console.log(response);
        this.getEncabezado();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
        addForm.reset();
      }
    })
  }

  public onUpdateEnc(encabezado: Encabezado) {
    this.editarEnc = encabezado;
    document.getElementById('add-Enc-form')?.click();
    this.encabezadoService.editEncabezado(encabezado).subscribe({
      next: (response: Encabezado) => {
        console.log(response);
        this.getEncabezado();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }


  public onDeleteEnc(idH: number): void {
    this.encabezadoService.deleteEncabezado(idH).subscribe({
      next: (Response: void) => {
        console.log(Response);
        this.getEncabezado();
      },
      error: (error: HttpErrorResponse) => {
        alert("No se pudo eliminar")
      }
    })
  }

}

