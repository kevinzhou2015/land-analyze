import { BaiduMapModule } from 'angular2-baidu-map';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';

export const COMPONENTS = [
  HeaderComponent,
  ContainerComponent
];

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: [COMPONENTS]
})
export class CoreModule { }
