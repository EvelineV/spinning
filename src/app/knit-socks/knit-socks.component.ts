import { Component, OnInit } from '@angular/core';
import { FootMeasurements, SockGaugeSettings, SockInstructions } from './types';
import { calculateSock } from './calculators';
import { GaugeSettings } from '../knit-gauge-component/types';
import { defaultDistanceInCM } from '../knit-gauge-component/constants';

@Component({
  selector: 'app-knit-socks',
  templateUrl: './knit-socks.component.html',
})
export class KnitSocksComponent implements OnInit {

  converter: any;
  footModel = new FootMeasurements({ legCircumference: 23, instepHeight: 6, forefootCircumference: 22, length: 24 });
  gaugeModel = new GaugeSettings({
    horizontalDistance: defaultDistanceInCM,
    verticalDistance: defaultDistanceInCM,
    horizontalStitches: 30,
    verticalStitches: 42,
    needle: "2.25mm DPN",
    yarn: "Random Superwash Sock",
   });
  ease: number = -5; // percentage
  instructions?: SockInstructions;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.instructions = calculateSock(this.footModel, { ...this.gaugeModel, ease: this.ease });
  }

  changeGauge(gauge: GaugeSettings): void {
    this.gaugeModel = gauge;
    this.resetSubmitted()
  }

  resetSubmitted(): void {
    this.instructions = undefined;
  }
}
