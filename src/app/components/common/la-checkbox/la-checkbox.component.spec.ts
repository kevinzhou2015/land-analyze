import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCheckboxComponent } from './la-checkbox.component';

describe('LaCheckboxComponent', () => {
  let component: LaCheckboxComponent;
  let fixture: ComponentFixture<LaCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
