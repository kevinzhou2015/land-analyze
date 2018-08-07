import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['住宅', '商业', '其它', '商住'];
  selected2 = ['住宅'];
  @Output() toggleMenu = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.toggleMenu.emit();
  }

}
