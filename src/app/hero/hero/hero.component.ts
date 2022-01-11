import { Component } from "@angular/core";

@Component({
    selector:"app-hero",
    templateUrl:"./hero.component.html"
})
export class HeroComponent{
    name: string = "Iroman";
    age: number = 45;

    getName():string{
        return `${this.name} - ${this.age}`;
    }
    // GET
    get upperCaseName(){
        return this.name.toUpperCase();
    }

    changeName():void{
        this.name = (this.name=="Iroman")?"Spiderman":"Iroman";
    }

    changeAge():void{
        this.age = (this.age==45)?20:45;
    }
}