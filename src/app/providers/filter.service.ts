import { FilterValues } from '../components/filter-rows/land-filter/land-filter.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private landFiltersSource = new Subject<any>();
  landFiltered$ = this.landFiltersSource.asObservable();

  filterLand(years: FilterValues[], naturals: FilterValues[], statuses: Array<any>) {
    this.landFiltersSource.next([years, naturals, statuses]);
  }
}
