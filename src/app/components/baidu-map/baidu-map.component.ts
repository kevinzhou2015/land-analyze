import { FilterValues } from '../filter-rows/land-filter/land-filter.component';
import { filter } from 'rxjs/operators';
import { SR, Land, Apartment } from '../../models/land.model';
import { MapOptions, PolygonOptions, Point, BMapInstance } from 'angular2-baidu-map';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LandsService } from '../../providers/lands.service';
import { FilterService } from '../../providers/filter.service';
import { initApartmentMarker, addLandMarker, addSRMarker, isMatched } from './MapHelper';
declare var BMap;

@Component({
  selector: 'app-baidu-map',
  templateUrl: './baidu-map.component.html',
  styleUrls: ['./baidu-map.component.css']
})
export class BaiduMapComponent implements OnInit {

  options: MapOptions;
  polygonOptions: PolygonOptions;

  point: Point = {
    lat: 30.270849,
    lng: 120.225462
  };
  zoom = 12;
  map: any;

  apartmentMarker: any;

  @Output() landClicked = new EventEmitter<any>();
  constructor(public landsService: LandsService,
    private filterService: FilterService) {
    this.options = {
      centerAndZoom: {
        lat: this.point.lat,
        lng: this.point.lng,
        zoom: this.zoom
      },
      enableKeyboard: true,
      enableScrollWheelZoom: true,
      disableDragging: false
    };

    this.polygonOptions = {
      strokeColor: 'blue',
      strokeWeight: 2
    };

    // filter
    this.filterService.landFiltered$.subscribe(
      (conditiones: any) => {
        this.map.clearOverlays();
        this.landsService.getLands().pipe(
          filter(
            (land: Land) => {
              return isMatched(conditiones, land);
            }
          ))
          .subscribe((land: Land) => {
            addLandMarker(land);
          });
      });
  }



  ngOnInit(): void {

  }

  mapClick = (e: any) => {
    console.log(`The coordinate you chose is lng:${e.point.lng},lat: ${e.point.lat}`);
    // const point = new BMap.Point(e.point.lng, e.point.lat);
    // this.map.panTo(point);
  }

  onMapLoad = (map: BMapInstance) => {
    this.map = map;
    this.apartmentMarker = initApartmentMarker(map);

    this.map.addEventListener('zoomend', this.onZoomChanged);
    this.landsService.getLands().subscribe((land: Land) => {
      addLandMarker(land);
    });

    this.landsService.getSRs().subscribe((sr: SR) => {
      const px = sr.lat;
      const py = sr.lng;
      const mpx = px.split(';');
      const mpy = py.split(';');
      addSRMarker(mpy, mpx, sr);

    });

    this.landsService.getApartments().subscribe((aprt: Apartment) => {
      const myCompOverlay = new this.apartmentMarker(new BMap.Point(aprt.PRJX, aprt.PRJY),
        aprt.PRJNAME + ' ' + aprt.RESIDEAVANUM, aprt.PRJNAME + ' ' + aprt.RESIDEAVANUM);

      this.map.addOverlay(myCompOverlay);

    });

  }

  onZoomChanged = (type, target) => {

  }

  getVolume = (volume_rate: string): number => {
    const rates = volume_rate.split('-');
    return parseFloat(rates.reverse()[0]);
  }

  onLandClicked = (e: any) => {
    this.landClicked.emit(e);
  }


}


