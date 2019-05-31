import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 't-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {

  nombreGrupo: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit() {
  }

}
