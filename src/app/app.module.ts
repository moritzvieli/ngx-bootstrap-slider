import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { TestSliderComponent } from './test-slider/test-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSliderComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
