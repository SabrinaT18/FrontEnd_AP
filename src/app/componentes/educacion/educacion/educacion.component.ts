import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: educacion[] = [];
  FormVisibilty : boolean = false;
  public editarEducacion: educacion| undefined;
  public deleteEducacion: educacion | undefined;
  isLogged = false;


  constructor(private educacionService:EducacionService , 
    private tokenService: TokenService,     
    private snackBar: MatSnackBar,
    ) { }
 
  ngOnInit(): void {
   this.getEducacion();
       }
       

public getEducacion (): void {
  this.educacionService.getEducacion().subscribe({
     next: (Response: educacion[] ) => {
     this.educacion= Response;
     console.log(this.educacion)
    },
    error: (error: HttpErrorResponse)=> {
      alert (error.message)
    }
  })}
 
  
  public onOpenModal(mode:String, educacion?: educacion):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
    button.setAttribute('data-target','#addEducacionModal');
      }else if(mode==='delete'){
     this.deleteEducacion= educacion;
     button.setAttribute('data-target','#deleteEducacionModal');
       }else if(mode==='edit'){
      this.editarEducacion= educacion;
      button.setAttribute('data-target','#editEducacionModal');
            }
      container?.appendChild(button); 
      button.click();
    }
   
      
    public onAddEducacion(addForm: NgForm):void{
     document.getElementById('add-educacion-form')?.click();
     this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response:educacion) =>{
       this.getEducacion();
       addForm.reset();       
       this.snackBar.open(`Se agregó educación`, 'Ok', { duration: 3000 });
      },
        error:(error:HttpErrorResponse)=>{
        alert(error.message)
        addForm.reset();
      }
    })
  }
      
      public onUpdateEducacion (educacion: educacion){
      this.editarEducacion= educacion;
      document.getElementById('edit-educacion-form')?.click();
     this.educacionService.editarEducacion(educacion).subscribe({
            next: (response:educacion) =>{
              this.getEducacion();
              this.snackBar.open(`${educacion.titulo} - fue editado correctamente`, 'Ok', { duration: 3000 });
            },
            error:(error:HttpErrorResponse)=>{
              alert(error.message)
            }
          })
        }


onDeleteEducacion(IdEd:number):void{
  this.educacionService.deleteEducacion(IdEd).subscribe({
    next: (response:void) =>{
      console.log(response);
      this.getEducacion();
      this.snackBar.open(`Id n°: ${IdEd} - fue eliminado`, 'Ok', { duration: 3000 });
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message)
    }
  })
}
}