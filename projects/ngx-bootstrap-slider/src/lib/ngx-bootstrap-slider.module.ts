import { NgModule } from '@angular/core';
import { NgxBootstrapSliderComponent } from './ngx-bootstrap-slider.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
  ],
  declarations: [NgxBootstrapSliderComponent, SliderComponent],
  exports: [
    NgxBootstrapSliderComponent,
    SliderComponent
  ]
})
export class NgxBootstrapSliderModule { }
