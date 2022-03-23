import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  };


  // agregarNuevoPersonaje( argumento: Personaje ){
  //   // Palabra clave en JS
  //   // debugger;
  //   this.personajes.push(argumento)
  // }

  // Injection del servicio o injection de dependencias
  constructor( public dbzService: DbzService ){}
  
}
