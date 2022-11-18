import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {
 
  transform(value: { nombre: string, apellido: string }): string {
   
    let resultado: string;
    resultado =  value.nombre+ ' ' + value.apellido

    return resultado;

  }

}
