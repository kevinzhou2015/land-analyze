import { Land, SR, Apartment } from '../models/land.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Injectable()
export class LandsService {
  constructor(private http: HttpClient) {

  }

  getLands(): Observable<Object> {
    return this.http.get('assets/lands.json').pipe(
      switchMap((srs: Array<Land>) => from(srs)),
      filter(sr => sr.acreage != null)
    );
  }
  getSRs(): Observable<Object> {
    return this.http.get('assets/arraySR.json').pipe(
      switchMap((srs: Array<SR>) => from(srs)),
      filter(sr => sr.lat != null)
    );
  }
  getApartments(): Observable<Object> {
    return this.http.get('assets/apartments.json').pipe(
      switchMap((srs: Array<Apartment>) => from(srs))
    );
  }
}
