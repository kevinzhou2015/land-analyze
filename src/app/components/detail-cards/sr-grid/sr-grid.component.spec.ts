import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrGridComponent } from './sr-grid.component';

describe('SrGridComponent', () => {
  let component: SrGridComponent;
  let fixture: ComponentFixture<SrGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
