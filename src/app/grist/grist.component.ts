import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../unit-converter.service';

@Component({
  selector: 'app-grist',
  templateUrl: './grist.component.html',
  styleUrls: ['./grist.component.css']
})
export class GristComponent implements OnInit {

  converters: any;
  length = 200;
  weight = 100;
  grist = 0;

  constructor(
    public unitConverterService: UnitConverterService,
  ) {
    this.unitConverterService.selectedChange.subscribe((_value) => {
      // reset converters
      this.length = this.length * this.converters.long_length.factor;
      this.weight = this.weight * this.converters.small_weight.factor;

      // update converters
      this.converters = unitConverterService.getConverters();

      // set length and weight according to new converters
      this.length = this.length / this.converters.long_length.factor;
      this.weight = this.weight / this.converters.small_weight.factor;

      // at last, update calculation
      this.calculate()
    })
  }

  ngOnInit(): void {
    this.converters = this.unitConverterService.getConverters();
    this.calculate();
  }

  calculate(): void {
    const normalized_length = this.length;
    const normalized_weight = this.weight * this.converters.small_weight.factor;
    this.grist = (normalized_length / normalized_weight) * this.converters.large_weight.factor;
  }

  onLengthChange(event: any) {
    this.length = event.target.value as number;
    this.calculate();
  }

  onWeightChange(event: any) {
    this.weight = event.target.value as number;
    this.calculate();
  }
}
