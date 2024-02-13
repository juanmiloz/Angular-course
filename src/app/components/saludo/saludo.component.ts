import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy{

  @Input() name: string = "Anonimo";
  @Output() messageEmmiter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor() { }

  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente
    console.log('ngOnInit del componente Saludo')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // instrucciones durante el cambio del componente
    console.log('ngOnChanges El componente recibe cambios', changes)
    console.log('CAMBIO: valor anterior: ', changes['name'].previousValue)
    console.log('CAMBIO: valor nuevo: ', changes['name'].currentValue)
  }

  ngOnDestroy(): void {
    // instrucciones previas a la destruccion del componente
    console.log('ngOnChanges El componente se va a destruir')
  }

  /*
  *  Ejemplo para gestionar un evento de tipo click en el DOM
  */
  alertSaludo(): void {
    alert(`Hola, ${this.name}. Alerta despachada desde un click del boton`);
  }


  /*
   *  Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componentePadre
   */
  sendMessageToFather(): void{
    this.messageEmmiter.emit(`Hola, ${this.name}. Alerta despachada desde un click del boton`)
  }
}

// Orden de ciclo de vida de los componentes
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy
