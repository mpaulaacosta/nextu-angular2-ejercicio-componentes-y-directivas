/*import { Injectable } from '@angular/core';

@Injectable()*/
export class DataService {
/*
  constructor() { }*/
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

  obtenerTareas() {
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
