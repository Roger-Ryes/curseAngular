import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';

 @NgModule({
     declarations:[
         HeroComponent,
         ListadoComponent
     ],
     exports:[
        HeroComponent,
         ListadoComponent
     ],
     imports:[ // Solo modulos
        CommonModule // Se importa, al usar *ngIf, *ngFor, etc
     ]
 })
export class HeroModule{

}