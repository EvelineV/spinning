import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../unit-converter.service';
import { FootMeasurements, GaugeSettings, SockInstructions } from './types';
import { defaultDistanceInCM, defaultDistanceInInches } from './constants';
import { calculateSock } from './calculators';

@Component({
  selector: 'app-knit-socks',
  templateUrl: './knit-socks.component.html',
  styleUrls: ['./knit-socks.component.css']
})
export class KnitSocksComponent implements OnInit {

  converter: any;
  footModel = new FootMeasurements(23, 6, 22, 24);
  gaugeModel = new GaugeSettings(defaultDistanceInCM, defaultDistanceInCM, 30, 42, "2.25mm DPN", "Random Superwash Sock");
  submitted = false;
  instructions?: SockInstructions;

  constructor(
    public unitConverterService: UnitConverterService,
  ) {
    this.unitConverterService.selectedChange.subscribe((_value)=>{
      // reset converters
      this.gaugeModel.horizontalStitches = this.gaugeModel.horizontalStitches * this.converter.factor;
      this.gaugeModel.horizontalDistance = this.gaugeModel.horizontalDistance * this.converter.factor;
      this.gaugeModel.verticalStitches = this.gaugeModel.verticalStitches * this.converter.factor;
      this.gaugeModel.verticalDistance = this.gaugeModel.verticalDistance * this.converter.factor;
      this.footModel.forefootCircumference = this.footModel.forefootCircumference * this.converter.factor;
      this.footModel.instepHeight = this.footModel.instepHeight * this.converter.factor;
      this.footModel.legCircumference = this.footModel.legCircumference * this.converter.factor;
      this.footModel.length = this.footModel.length * this.converter.factor;

      // update converters
      this.converter = unitConverterService.getConverters()['short_length'];

      // set initial measurements according to new converters
      this.gaugeModel.horizontalStitches = this.gaugeModel.horizontalStitches / this.converter.factor;
      this.gaugeModel.horizontalDistance = this.gaugeModel.horizontalDistance / this.converter.factor;
      this.gaugeModel.verticalStitches = this.gaugeModel.verticalStitches / this.converter.factor;
      this.gaugeModel.verticalDistance = this.gaugeModel.verticalDistance / this.converter.factor;
      this.footModel.forefootCircumference = this.footModel.forefootCircumference / this.converter.factor;
      this.footModel.instepHeight = this.footModel.instepHeight / this.converter.factor;
      this.footModel.legCircumference = this.footModel.legCircumference / this.converter.factor;
      this.footModel.length = this.footModel.length / this.converter.factor;

      // update calculation
      this.instructions = calculateSock(this.footModel, this.gaugeModel);
    });
  }

  ngOnInit(): void {
    this.converter = this.unitConverterService.getConverters()['short_length'];
    if (this.converter.name == "inches") {
      // if we are already on imperial when this page is loaded, set the initial values to inches
      this.gaugeModel.horizontalDistance = defaultDistanceInInches;
      this.gaugeModel.verticalDistance = defaultDistanceInInches;
    }
  }

  onSubmit(): void{
    this.instructions = calculateSock(this.footModel, this.gaugeModel);
  }
}
