import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 't-i-tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  private listaTareasHoy: Object[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listaTareasHoy = this.dataService.obtenerTareasHoy();
  }

}
