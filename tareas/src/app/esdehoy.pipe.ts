import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esdehoy'
})
export class EsdehoyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var salida: string;
    salida = value;
    if (value == '2019-05-28') salida = 'Ojo: ¡Esta tarea es de HOY!';
    return salida;
  }

}
