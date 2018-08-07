import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandGridComponent } from './land-grid.component';

describe('LandCardComponent', () => {
  let component: LandGridComponent;
  let fixture: ComponentFixture<LandGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
