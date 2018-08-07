import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @ViewChild('snav') snav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }

  public toggleNav(isOpen?: boolean) {
    this.snav.toggle(isOpen);
  }

}
