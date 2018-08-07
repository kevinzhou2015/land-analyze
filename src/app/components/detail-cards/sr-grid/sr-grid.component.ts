import { SR } from '../../../models/land.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sr-grid',
  templateUrl: './sr-grid.component.html',
  styleUrls: ['./sr-grid.component.scss']
})
export class SrGridComponent implements OnInit {
  @Input() data: SR;
  tiles;
  constructor() { }

  ngOnInit() {
    this.tiles = [
      { text: '设区市', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.city, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '县（市、区）', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.district, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '项目名称', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.project_name, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '实施主体', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.implementation_subject, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '项目类型', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.project_type, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '小计', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.planned_number.subtotal, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '政府收购商品房安置套数', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.planned_number.government_purchase, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '居民选购商品房安置套数', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.planned_number.residents_purchase, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '补偿款安置套数', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.planned_number.residents_compensation, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '开工安置住房套数', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.planned_number.resettlement, cols: 1, rows: 1, color: '#f5f5f5' },
      { text: '项目地址', cols: 1, rows: 1, color: 'lightpink' },
      { text: this.data.project_addr, cols: 3, rows: 1, color: '#f5f5f5' },
    ];
  }

}
