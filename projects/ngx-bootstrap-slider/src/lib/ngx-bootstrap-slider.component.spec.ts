import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapSliderComponent } from './ngx-bootstrap-slider.component';

describe('NgxBootstrapSliderComponent', () => {
  let component: NgxBootstrapSliderComponent;
  let fixture: ComponentFixture<NgxBootstrapSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
