import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 't-i-tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css'],
  providers: [DataService]
})
export class ITareasGruposComponent implements OnInit {

  listaGrupos: Object[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listaGrupos = [
      {nombre: "Familia", resaltado: false},
      {nombre: "Estudio", resaltado: false},
      {nombre: "Carrera", resaltado: false}
    ];
  };

  onHoverGroupIn(item) {
    item.resaltado = true;
  }
  onHoverGroupOut(item) {
    item.resaltado = false;
  }

}
