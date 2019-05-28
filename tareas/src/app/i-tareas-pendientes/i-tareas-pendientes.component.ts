import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 't-i-tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {

  private listaTareasPendientes: Object[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listaTareasPendientes = this.dataService.obtenerTareas();/*
     [
      {titulo: "Recoger libros", descripcion: "asdf"},
      {titulo: "Firmar autorización"},
      {titulo: "Cine con María"}
    ];*/
  }

}
