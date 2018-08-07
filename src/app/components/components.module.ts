import { FormsModule } from '@angular/forms';
import { BaiduMapModule } from 'angular2-baidu-map';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandGridComponent } from './detail-cards/land-grid/land-grid.component';
import { CardDirectiveDirective } from './detail-cards/card-directive.directive';
import { SrGridComponent } from './detail-cards/sr-grid/sr-grid.component';
import { LandFilterComponent } from './filter-rows/land-filter/land-filter.component';
import { FilterContainerComponent } from './filter-rows/filter-container/filter-container.component';
import { LaCheckboxComponent } from './common/la-checkbox/la-checkbox.component';
import { BaiduMapComponent } from './baidu-map/baidu-map.component';
export const COMPONENTS = [
  CardDirectiveDirective,
  LandGridComponent,
  SrGridComponent,
  LandFilterComponent,
  BaiduMapComponent,
  FilterContainerComponent,
   LaCheckboxComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaiduMapModule.forRoot({ ak: 'PkpV9YHKG1ksnOwGdPLWBUNGBukPCrfn' }),
    MaterialModule
  ],
  declarations: [COMPONENTS, ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
