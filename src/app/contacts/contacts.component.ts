import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsForm = new FormGroup({
    clientName: new FormControl('', [Validators.required , Validators.minLength(2), Validators.maxLength(8)]),
    clientAge: new FormControl('',[Validators.min(10), Validators.max(80)]),
    clientMail: new FormControl('', Validators.email),
    messageTitle: new FormControl('', Validators.pattern(/^[A-z]/)),
    messageBody: new FormControl(''),
  });

  contactsList=[];

  saveForm()
  {
    this.contactsList.push(this.contactsForm.value);
    localStorage.setItem("contacts",JSON.stringify(this.contactsList));
    console.log(this.contactsForm);
    //window.alert("it works!")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
