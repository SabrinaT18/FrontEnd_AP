import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  Proyectos: proyectos[] = [];
  usuarioAdmin: Boolean| undefined;
  public editarProyectos: proyectos | undefined;
  public deleteProyectos: proyectos | undefined;

  constructor(private ProyectosService: ProyectosService,
    private snackBar: MatSnackBar,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.getProyectos()
    this.usuarioAdmin = this.tokenService.IsAdmin();
  }

  public getProyectos(): void {
    this.ProyectosService.getProyectos().subscribe({
      next: (Response: proyectos[]) => {
        this.Proyectos = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }


  public onOpenModal(mode: String, Proyectos?: proyectos): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    } else if (mode === 'delete') {
      this.deleteProyectos = Proyectos;
      button.setAttribute('data-target', '#deleteProyectoModal');
    } else if (mode === 'edit') {
      this.editarProyectos = Proyectos;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }


  public onAddProyectos(addForm: NgForm): void {
    document.getElementById('add-Proyecto-form')?.click();
    this.ProyectosService.createProyectos(addForm.value).subscribe({
      next: (response: proyectos) => {
        this.getProyectos();
        addForm.reset();
        this.snackBar.open(`Se agregó proyecto correctamente`, 'Ok', { duration: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
        addForm.reset();
        }
    })
  }

    public onUpdateProyectos(Proyectos: proyectos) {
    this.editarProyectos = Proyectos;
    document.getElementById('add-Proyecto-form')?.click();
    this.ProyectosService.editProyectos(Proyectos).subscribe({
      next: (response: proyectos) => {
        this.getProyectos();
        this.snackBar.open(`${Proyectos.describeProyect} - fue editado correctamente`, 'Ok', { duration: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }


  public onDeleteProyectos(IdPro: number): void {
    this.ProyectosService.deleteProyectos(IdPro).subscribe({
      next: (Response: void) => {
        this.getProyectos();
        this.snackBar.open(`Id n°: ${IdPro} - fue eliminado`, 'Ok', { duration: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        alert("No se pudo eliminar")
      }
    })
  }

}

