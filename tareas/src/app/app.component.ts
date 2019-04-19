import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
/* supuestamente debería poner la siguiente línea pero me está funcionando sin ella */
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {/*
  title = 't works!';*/
}
