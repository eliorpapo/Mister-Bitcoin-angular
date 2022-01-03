import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact = {
    _id: '',
    name: '',
    email: '',
    phone: ''
  };
  @Output() onSelect = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSelectContact() {
    this.onSelect.emit(this.contact._id);
  }
}
