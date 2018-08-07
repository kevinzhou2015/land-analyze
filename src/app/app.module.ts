import { LandGridComponent } from './components/detail-cards/land-grid/land-grid.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { LandsService } from './providers/lands.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SrGridComponent } from './components/detail-cards/sr-grid/sr-grid.component';
import { FilterService } from './providers/filter.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ComponentsModule
  ],
  entryComponents: [LandGridComponent, SrGridComponent],
  providers: [LandsService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
