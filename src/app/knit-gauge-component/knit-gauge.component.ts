import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GaugeSettings } from './types';
import { defaultDistanceInCM } from './constants';

@Component({
  selector: 'app-knit-gauge',
  templateUrl: './knit-gauge.component.html',
})
export class KnitGaugeComponent implements OnInit {

  gaugeModel = new GaugeSettings({
    horizontalDistance: defaultDistanceInCM,
    verticalDistance: defaultDistanceInCM,
    horizontalStitches: 30,
    verticalStitches: 42,
    needle: "2.25mm DPN",
    yarn: "Random Superwash Sock",
  });

  @Output() emitter = new EventEmitter<GaugeSettings>();

  ngOnInit(): void {
    this.emitter.emit(this.gaugeModel);
  }

  onChange(): void {
    this.emitter.emit(this.gaugeModel);
  }

}
