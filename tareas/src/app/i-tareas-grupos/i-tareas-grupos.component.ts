import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css']
})
export class ITareasGruposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaGrupos = [
    {nombre: "Familia", resaltado: false},
    {nombre: "Estudio", resaltado: false},
    {nombre: "Carrera", resaltado: false}
  ]

  onHoverGroupIn(item) {
    item.resaltado = true;
  }
  onHoverGroupOut(item) {
    item.resaltado = false;
  }

}
