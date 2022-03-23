import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


// Un servicio es un valor centralizado, tanto padre como hijos tendran acceso a este con los datos actualizados

@Injectable()
export class DbzService{
    constructor(){
        console.log("Servicio inicializado");
    }

    private _personajes: Personaje [] =[
        {nombre: "Krillin", poder: 700},
        {nombre: "Goku", poder: 1700},
        {nombre: "Vegeta", poder: 1600}
    ]

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}