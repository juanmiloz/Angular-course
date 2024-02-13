import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {IContact} from "../../models/contact.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy{

  //Creamos una lista de contactos
  contactList: IContact[] = []
  selectedContact: IContact | undefined ;

  //subscripcion del servicio
  subscription: Subscription | undefined


  //Inyectamos en el constructor el servicio de Contactos
  constructor(private contactService: ContactService) { }

  ngOnInit(): void{
    //Obtener la lista de contactos que nos brinda el servicio
    this.contactService.getAllContacts()
      .then((contactList:IContact[]) =>{this.contactList = contactList})
      .catch(e => alert(`Ha habido un error al resolver la lista de contactos: ${e}`))
      .finally(() => console.log("Peticion de la lista de contactos terminada"))
  }

  getContact(id: number) {
    // console.log(`Obtener info del constaco: ${id}`)
    this.subscription = this.contactService.getContactById(id)?.subscribe(
      (contacto:IContact) => this.selectedContact = contacto,
      (error) => alert(`Ha habido un error al resolver la lista de contactos: ${error}`)
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
