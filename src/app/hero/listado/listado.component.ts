import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["spiderman", "Thor", "Iroman", "CapitanAmerica"]
  heroDeleted: string = "";

  deleteHero():void{
    this.heroDeleted = this.heroes.pop() || "";
    console.log(`${this.heroDeleted} Borrado...`);
  }
}
