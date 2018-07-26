import { TestBed, inject } from '@angular/core/testing';

import { NgxBootstrapSliderService } from './ngx-bootstrap-slider.service';

describe('NgxBootstrapSliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBootstrapSliderService]
    });
  });

  it('should be created', inject([NgxBootstrapSliderService], (service: NgxBootstrapSliderService) => {
    expect(service).toBeTruthy();
  }));
});
