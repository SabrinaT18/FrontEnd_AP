import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { experiencia_laboral } from 'src/app/models/Experiencia_laboral';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: experiencia_laboral[]=[];
  public editarExperiencia:experiencia_laboral | undefined;
  public deleteExperiencia:experiencia_laboral| undefined;
  usuarioAdmin: Boolean| undefined;

  constructor(private experienciaService:ExperienciaService, 
    private snackBar: MatSnackBar,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.obtenerExperiencia();
    this.usuarioAdmin = this.tokenService.IsAdmin();
  }

  public obtenerExperiencia():void{
    this.experienciaService.getExperiencia_laboral().subscribe({
      next:(Response:experiencia_laboral[]) =>{
      this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      } 
    });
  }

  public onOpenModal(mode:String, experiencia?: experiencia_laboral):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addExperienciaModal');
    }else if(mode==='delete'){
      this.deleteExperiencia=experiencia;
      button.setAttribute('data-target','#deleteExperienciaModal');
    }else if(mode==='edit'){
      this.editarExperiencia=experiencia;
      button.setAttribute('data-target','#editExperienciaModal');
    }
    container?.appendChild(button); 
    button.click();
  }


  public onAddExperiencia(addForm: NgForm):void{
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.createExperiencia_laboral(addForm.value).subscribe({
      next: (response:experiencia_laboral) =>{
        this.obtenerExperiencia();
        addForm.reset();
        this.snackBar.open(`Se agreg?? experiencia`, 'Ok', { duration: 3000 });
      },
      })
  }

  public onUpdateExperiencia(experiencia: experiencia_laboral){
    this.editarExperiencia=experiencia;
    document.getElementById('edit-experiencia-form')?.click();
    this.experienciaService.editExperiencia_laboral(experiencia).subscribe({
      next: (response:experiencia_laboral) =>{
        this.obtenerExperiencia();
        this.snackBar.open(`${experiencia.descripcion} - fue editado correctamente`, 'Ok', { duration: 3000 });
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onDeleteExperiencia(idExp:number):void{
    this.experienciaService.deleteExperiencia_laboral(idExp).subscribe({
      next: (response:void) =>{
        this.obtenerExperiencia();
        this.snackBar.open(`Id n??: ${idExp} - fue eliminado`, 'Ok', { duration: 3000 });
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
