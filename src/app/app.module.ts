import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import {FormsModule} from "@angular/forms";
//Module personalizado que exporta componentes de tipo lista
import {ListsModule} from "./modules/lists/lists.module";
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContactsListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro modulo personalizado
    ListsModule,
    //importamos el modoulo HttpClientModule para hacer la peticion
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
