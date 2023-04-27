import { Component, OnInit } from '@angular/core';
import { FootMeasurements, GaugeSettings, SockInstructions } from './types';
import { defaultDistanceInCM } from './constants';
import { calculateSock } from './calculators';

@Component({
  selector: 'app-knit-socks',
  templateUrl: './knit-socks.component.html',
})
export class KnitSocksComponent implements OnInit {

  converter: any;
  footModel = new FootMeasurements({ legCircumference: 23, instepHeight: 6, forefootCircumference: 22, length: 24 });
  gaugeModel = new GaugeSettings({horizontalDistance: defaultDistanceInCM, verticalDistance: defaultDistanceInCM, horizontalStitches: 30, verticalStitches: 42, ease: -5, needle: "2.25mm DPN", yarn: "Random Superwash Sock"});
  instructions?: SockInstructions;

  constructor(
  ) {
      this.instructions = calculateSock(this.footModel, this.gaugeModel);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.instructions = calculateSock(this.footModel, this.gaugeModel);
  }

  resetSubmitted(): void {
    this.instructions = undefined;
  }
}
