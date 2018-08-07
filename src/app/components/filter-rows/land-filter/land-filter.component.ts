import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FilterContainerComponent } from '../filter-container/filter-container.component';
import { FilterService } from '../../../providers/filter.service';
import { fromEvent } from 'rxjs';

export interface FilterValues {
  text: string;
  value: string;
  field: string;
  checked: boolean;
}

@Component({
  selector: 'app-land-filter',
  templateUrl: './land-filter.component.html',
  styleUrls: ['./land-filter.component.scss']
})
export class LandFilterComponent extends FilterContainerComponent implements OnInit {


  years: FilterValues[] = [
    { text: '2015', field: 'transfer_time', value: '2015', checked: true },
    { text: '2016', field: 'transfer_time', value: '2016', checked: true },
    { text: '2017', field: 'transfer_time', value: '2017', checked: true },
    { text: '2018', field: 'transfer_time', value: '2018', checked: true },
  ];
  naturals = [
    { text: '商业', field: 'nature_of_land', value: '商业', checked: true },
    { text: '住宅', field: 'nature_of_land', value: '住宅', checked: true },
  ];

  statuses = [
    { text: '待售', field: 'owner', value: '--', checked: true },
    { text: '已售', field: 'owner', value: 'yes', checked: true },
  ];

  constructor(protected overlay: Overlay, protected viewContainerRef: ViewContainerRef,
    private filterService: FilterService) {
    super(overlay, viewContainerRef);

  }

  ngOnInit() {
    super.ngOnInit();

  }

  onChanged() {
    this.filterService.filterLand(this.years, this.naturals, this.statuses);
  }

}
