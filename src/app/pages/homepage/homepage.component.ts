import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { userService } from 'src/services/user.service';
import { bitcoinService } from 'src/services/bitcoin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  user: User | undefined;
  answer$: Observable<string> | Promise<string> | undefined;

  constructor(
    private userService: userService,
    private bitcoinService: bitcoinService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.answer$ = this.bitcoinService.getRate();
  }
}
