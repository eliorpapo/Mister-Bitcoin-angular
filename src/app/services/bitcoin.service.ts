import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class bitcoinService {
  constructor(private http: HttpClient) {}

  public getRate() {
    return this.http.get<string>(
      'https://blockchain.info/tobtc?currency=USD&value=1'
    );
  }
}
