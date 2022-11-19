import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: skills[] = [];
  public editarSkills: skills | undefined;
  public deleteSkills: skills | undefined;
  usuarioAdmin: Boolean| undefined;

  constructor(private skillsService: SkillsService,
    private snackBar: MatSnackBar,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.obtenerSkills();
    this.usuarioAdmin = this.tokenService.IsAdmin();
  }

  public obtenerSkills(): void {
    this.skillsService.getSkills().subscribe({
      next: (Response: skills[]) => {
        this.skills = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  public onOpenModal(mode: String, skills?: skills): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillsModal');
    } else if (mode === 'delete') {
      this.deleteSkills = skills;
      button.setAttribute('data-target', '#deleteSkillsModal');
    } else if (mode === 'edit') {
      this.editarSkills = skills;
      button.setAttribute('data-target', '#editSkillsModal');
    }
    container?.appendChild(button);
    button.click();
    console.log("llama a la funcion");
  }



  public onAddSkills(addForm: NgForm): void {
    document.getElementById('add-skills-form')?.click();
    this.skillsService.createSkills(addForm.value).subscribe({
      next: (response: skills) => {
        console.log(response);
        this.obtenerSkills();
        addForm.reset();
        this.snackBar.open(`Se agregó habilidad correctamente`, 'Ok', { duration: 3000 });
      },
        error:(error:HttpErrorResponse)=>{
        alert(error.message)
        addForm.reset();
      }
    })
  }

  public onUpdateSkills(skills: skills) {
    this.editarSkills = skills;
    document.getElementById('add-skills-form')?.click();
    this.skillsService.editSkills(skills).subscribe({
      next: (response: skills) => {
        console.log(response);
        this.obtenerSkills();
        this.snackBar.open(`${skills.skillsName} - fue editado correctamente`, 'Ok', { duration: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  public onDeleteSkills(idS: number): void {
    this.skillsService.deleteSkills(idS).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenerSkills();
        this.snackBar.open(`Id n°: ${idS} - fue eliminado`, 'Ok', { duration: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

}