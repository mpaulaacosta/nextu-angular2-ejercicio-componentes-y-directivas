import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private httpService: HttpService) { }

  private grupos: Object[] = [
    {nombre: "Familia", resaltado: false},
    {nombre: "Estudio", resaltado: false},
    {nombre: "Trabajo", resaltado: false}
  ];

  private tareas: {
    titulo: string,
    descripcion: string,
    fecha: string,
    grupo: string
  }[] = [
    {
      titulo: "Recoger libros",
      descripcion: "Ir, pedirlos y volver.",
      fecha: "2019-05-27",
      grupo: "Estudio"
    },
    {
      titulo: "Firmar autorizaci'on",
      descripcion: "Escribir nombre con el esfero.",
      fecha: "2019-05-28",
      grupo: "Trabajo"
    },
    {
      titulo: "Cita con Mar'ia",
      descripcion: "Ir a cine",
      fecha: "2019-05-26",
      grupo: "Familia"
    },
    {
      titulo: "Estudiar Angular2",
      descripcion: "Hacer el ejercicio",
      fecha: "2019-05-28",
      grupo: "Estudio"
    }
  ]

  obtenerGrupos() {
    return this.grupos;
  }

  obtenerTareas() {/*
    En la lección #4 no concluyen con la forma como se debería
    incorporar el servicio HTTP en el servicio DATA, pero ése es
    el primer punto del ejercicio al final de la lección #5.
    Este es el primer punto:*/
    this.httpService.getDatos().subscribe(
      (data: Response) => console.log(data)
    );
    return this.tareas;
  }

  obtenerTareasHoy() {
    let tareasHoy: Object[] = [];
    this.tareas.forEach(element => {
      if (element.fecha == "2019-05-28"){
        tareasHoy.push(element);
      }
    })
    return tareasHoy;
  }

}
