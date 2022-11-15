import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/models/Acercade';
import { AcercadeService } from 'src/app/servicios/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercade: Acercade= new Acercade("");

  public editarAcercade: | undefined;
  FormVisibilty : boolean = false;

constructor(private acercaDeService : AcercadeService) { }

ngOnInit(): void {
    this.getAcercade();
    console.log(this.acercade)
}
     
public getAcercade(): void {
  this.acercaDeService.getAcercade().subscribe({
    next:(Response: Acercade) =>{
      this.acercade=Response;
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message)
    }
  });
}

editarTexto (): void{
this.FormVisibilty=true;
 }

onSubmit (acercade: Acercade): void {
this.FormVisibilty= false; 
document.getElementById('texto')?.click();
this.acercaDeService.editAcercade(acercade).subscribe ({
next: (Response: Acercade) => {
  console.log(Response);
  this.getAcercade()
}, error:(error: HttpErrorResponse) => {
  alert (error.message)
}
}) 
}
}

