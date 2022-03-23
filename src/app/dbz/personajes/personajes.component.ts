import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input()
  // @Input("data") // Metodo2: Se lo puede llamar desde el otro html con nombre "data" 
  // characters: Personaje[] = [];

  get characters(): Personaje[]{
    return this.dbzService.personajes; 
  }

  constructor(
    private dbzService: DbzService
  ){}
}
