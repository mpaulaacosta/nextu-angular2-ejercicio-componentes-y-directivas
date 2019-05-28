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

  obtenerGrupos() {
    return this.grupos;
  }

}
