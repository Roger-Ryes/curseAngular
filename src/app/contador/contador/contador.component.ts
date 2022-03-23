// CREAR COMPONENTE MANUALMENTE
// Este "componente" se debe agregar al "modulo" (ver app.modulo.ts line 10)

import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <hr>

        <h2>Contador</h2>

        <h3>Metodo 1</h3>
        <button (click)="count = count+1;">+1</button>
        <span> {{ count }} </span>
        <button (click)="count = count-1;">-1</button>
        <hr>
        <h3>Metodo 2</h3>
        <button (click)="accumulate(+1)">+1</button>
        <span> {{ count }} </span>
        <button (click)="accumulate(-1)">-1</button>
        <hr>
        <h3>Tarea</h3>
        <p>Sumar de dependiendo del valor de la variable <strong>base</strong></p>
        <button (click)="accumulate(base)"> +{{ base }} </button>
        <span><strong> {{ count }} </strong></span>
        <button (click)="accumulate(base*-1)"> -{{ base }} </button>
    `
})
export class ContadorComponent{
    public title: string = 'Contador App';
    count: number = 0;
    public base: number = 5;
  
  
    accumulate(value: number){
      this.count+=value;
    }
}