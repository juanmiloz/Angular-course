import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo-16.2.12';
  username = '@juanmiloz';

  /*Esta funcion se ejecuta cuando en el hijo saludo component se pulse un boton*/
  receiveMessageFromSon(event: string){
    alert(event)
  }
}
