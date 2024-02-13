 import { Injectable } from '@angular/core';
//Import lista de contactos MOCK
 import {CONTACTS} from "../mocks/contact.mock";
 import {IContact} from "../models/contact.interface";
 import {Observable} from "rxjs";

 //importamos Observables de rxjs



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }

  getAllContacts(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS)
  }

  getContactById(id: number): Observable<IContact> | undefined{
    //Buscamos el contacto
    const contact:IContact | undefined = CONTACTS.find((contact: IContact) => contact.id === id)

    // Creamos un observarble
    let observable: Observable<IContact> = new Observable(observer => {
      observer.next(contact); // Emitir un valor a to do componente suscrito
      observer.complete(); // no emitimos mas v
    })

    if (contact) {
      return observable
    }else {
      return;
    }
  }

}
