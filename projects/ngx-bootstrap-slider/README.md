<div align="center">
  <img src="https://raw.githubusercontent.com/moritzvieli/ngx-bootstrap-slider/master/misc/documentation-assets/examples.png" width="300" alt="Angular Bootstrap Slider">
  <br>
  <h1>ngx-bootstrap-slider</h1>
</div>

This is an Angular component for the popular and very flexible seiyria/bootstrap-slider (https://github.com/seiyria/bootstrap-slider).

Some demos are available here: https://seiyria.com/bootstrap-slider/

## Install

```
npm install ngx-bootstrap-slider
```

## Setup

### Include the module

Import the module in your app.module.ts:

```
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
```

Add the module to the imports in your app.module.ts:

```
imports: [
  ...
  NgxBootstrapSliderModule,
  ...
]
```

### Configure the Angular CLI

Add the CSS and JavaScript files to your angular.json:

```
"styles": [
  "node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css"
],
"scripts": [
  "node_modules/bootstrap-slider/dist/bootstrap-slider.min.js"
]
```

## Getting started

Add a slider element to your component:

```
<mv-slider [(value)]="value" [min]="1" [max]="100" [enabled]="enabled" (change)="change()"></mv-slider>
```

## Attributes

All available properties are described here: https://github.com/seiyria/bootstrap-slider#options

The names have been unified to camel-casing (e.g. `[ticksLabels]` not `[ticks_labels]`).

Please note, that the attribute `formatter` is not yet available.

## Events

All available events are described here: https://github.com/seiyria/bootstrap-slider#events

Currently, only the following events are implemented:
- slide
- slideStart
- slideStop
- change