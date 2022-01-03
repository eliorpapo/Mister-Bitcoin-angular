import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input()
  contacts: Contact[] = [];
  @Output() onSelect = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}