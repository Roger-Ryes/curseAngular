import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input("new") nuevo: Personaje = {nombre:"", poder:0};
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter(); 

  agregar(){
    if(this.nuevo.nombre.trim().length != 0 && typeof(this.nuevo.poder) == "number" ){
      console.log(this.nuevo);
      // this.onNewCharacter.emit( this.nuevo );
      this.dbzService.agregarPersonaje(this.nuevo);
    }
    else{
      return;
    }
  }

  // cambiarNombre( event: any ){
  //   this.nuevo.nombre = event.target.value;
  //   console.log(this.nuevo.nombre);
  // }

  constructor(private dbzService:DbzService){}
}
