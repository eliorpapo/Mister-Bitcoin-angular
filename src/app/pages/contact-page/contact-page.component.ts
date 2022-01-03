import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: Contact[];
  contacts$: Observable<Contact[]>;
  selectedContactId: string;

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void {
    this.ContactService.loadContacts();
    this.contacts$ = this.ContactService.contacts$;
  }
}
