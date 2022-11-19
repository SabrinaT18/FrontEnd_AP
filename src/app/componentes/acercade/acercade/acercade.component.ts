import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Acercade } from 'src/app/models/Acercade';
import { AcercadeService } from 'src/app/servicios/acercade.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercade: Acercade[]=[];
  public editAcercade: Acercade | undefined
  FormVisibilty: boolean = false;
  usuarioAdmin: Boolean| undefined;


  constructor(private acercaDeService: AcercadeService, 
    private snackBar: MatSnackBar,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAcercade();
    this.usuarioAdmin = this.tokenService.IsAdmin();
  }

 public getAcercade(): void {
    this.acercaDeService.getAcercade().subscribe({
      next: (Response: Acercade[]) => {
        this.acercade = Response;
        console.log(this.acercade)
        },   
     error: (error: HttpErrorResponse) => {
        alert(error.message)
      } 
    });
  }


  onSubmit(acercade: Acercade): void {
    this.FormVisibilty = false;
    this.editAcercade = acercade;
    document.getElementById('texto')?.click();
    this.acercaDeService.editAcercade(acercade).subscribe({
      next: (Response: Acercade) => {
        console.log(Response);
        this.snackBar.open(`Se editó correctamente`, 'Ok', { duration: 3000 });

      }, error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  editarTexto() {
    this.FormVisibilty = true;
  }




}
