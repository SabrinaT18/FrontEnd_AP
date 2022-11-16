import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Encabezado } from 'src/app/models/Encabezado';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  encabezado: Encabezado []=[];
  FormVisibilty: boolean = false;

  constructor(public encabezadoService: EncabezadoService) { }


  ngOnInit(): void {
  this.encabezadoService.getEncabezado()
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
      
  editarTexto() {
    console.log("funciona")
    this.FormVisibilty = true;
  }

  onSubmit(encabezado: Encabezado): void {
    this.FormVisibilty = false;
    document.getElementById('texto')?.click();
    this.encabezadoService.editEncabezado(encabezado).subscribe({
      next: (Response: Encabezado) => {
        console.log(Response);
        this.getEncabezado()
      }, error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }
}

