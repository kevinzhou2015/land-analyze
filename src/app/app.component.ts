import { SrGridComponent } from './components/detail-cards/sr-grid/sr-grid.component';
import { LandGridComponent } from './components/detail-cards/land-grid/land-grid.component';
import { CardDirectiveDirective } from './components/detail-cards/card-directive.directive';
import { LandsService } from './providers/lands.service';
import { Component, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';
import { MapOptions, Point, BMapInstance, PolygonOptions } from 'angular2-baidu-map';
import { Land, SR } from './models/land.model';
import { ContainerComponent } from './core/container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(CardDirectiveDirective) cardHost: CardDirectiveDirective;
  @ViewChild('appContainer') appContainer: ContainerComponent;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  onLandClicked = (e: any) => {
    const data = e.target.tag;
    if ((<Land>data).name) {
      this.loadComponent<LandGridComponent>(data, LandGridComponent);
    } else if ((<SR>data).project_name) {
      this.loadComponent<SrGridComponent>(data, SrGridComponent);
    }


    this.appContainer.toggleNav(true);
  }

  loadComponent<T>(data: any, tp: any) {
    const viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(tp);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).data = data;
  }

}
