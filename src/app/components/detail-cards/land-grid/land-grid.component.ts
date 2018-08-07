import { Land } from '../../../models/land.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-land-grid',
  templateUrl: './land-grid.component.html',
  styleUrls: ['./land-grid.component.scss']
})
export class LandGridComponent implements OnInit {
  @Input() data: Land;
  tiles;
  constructor() { }

  ngOnInit() {
    this.tiles = [
      { text: '出让面积（㎡）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.acreage, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '容积率', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.volume_rate, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '成交价（万元）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.final_price, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '用地性质', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.nature_of_land, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '商业占比', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.business_share, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '成交楼面价（元/㎡）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.floor_final_price, cols: 1, rows: 1, color: '#f5f5f5', fontColor: 'red' },
      { text: '起价（万元）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.start_price, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '配保（㎡)', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.insurance, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '溢价率', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.premium_rate, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '楼面起价（元/㎡）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.floor_start_price, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '竞得单位', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.owner, cols: 3, rows: 1, color: '#f5f5f5' },
      { text: '地块四至', cols: 1, rows: 2, color: 'lightpink' },
      { text: this.data.four_bound, cols: 3, rows: 2, color: '#f5f5f5' },
    ];
  }

}
