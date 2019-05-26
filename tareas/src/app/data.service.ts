/*import { Injectable } from '@angular/core';

@Injectable()*/
export class DataService {
/*
  constructor() { }*/
  private grupos: string[] = ["Familia", "Estudio", "Trabajo"];

  obtenerGrupos() {
    return this.grupos;
  }

}
