import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() contactId: string;
  @Output() onBack = new EventEmitter();
  contact: Contact;
  constructor(private contactService: ContactService) {}

  async ngOnInit(): Promise<void> {
    const contact = await this.contactService
      .getContactById(this.contactId)
      .toPromise();
    this.contact = contact;
  }
}
