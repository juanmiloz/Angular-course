import {Component} from '@angular/core';

//Creamos un tipo base para el ejemplo
export type Producto = {
  name: string;
  price: number;
  description: string;
}
@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent {

  isLoading: boolean = false;
  elementList: Producto[] = [
    {name: "Leche", price: 10, description: "Leche entera"},
    {name: "Carne", price: 20, description: "Carne de cerdo"},
    {name: "Manzana", price: 5, description: "Manzana roja"},
  ];
  option: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  changeCharging():void {
    this.isLoading = !this.isLoading
  }

  chooseOption(choosedOption: number):void{
    this.option = choosedOption; // implica un cambio a los elementos renderizados
  }
}
