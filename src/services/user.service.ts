import { User } from 'src/models/user.model';
import { Injectable } from '@angular/core';

var USER: User = { name: 'Ochoa Hyde', coins: 100, moves: [] };

@Injectable({
  providedIn: 'root',
})
export class userService {
  public getUser() {
    return USER;
  }
}
