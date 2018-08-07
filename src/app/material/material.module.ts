import { NgModule } from '@angular/core';

import {
  MatSidenavModule, MatToolbarModule,
  MatSelectModule, MatButtonModule,
  MatCardModule, MatGridListModule,
  MatListModule, MatButtonToggleModule, MatCheckboxModule, MatDividerModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
export const MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDividerModule
];

@NgModule({
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ],
})
export class MaterialModule { }
