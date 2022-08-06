import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../unit-converter.service';

class Grist {
  public length: number;
  public weight: number;

  constructor(payload: Partial<Grist>) {
    this.length = payload.length || 0;
    this.weight = payload.weight || 0;
  }
}

@Component({
  selector: 'app-grist',
  templateUrl: './grist.component.html',
  styleUrls: ['./grist.component.css']
})
export class GristComponent implements OnInit {

  converters: any;
  model = new Grist({length: 200, weight: 100});
  grist = 0;

  constructor(
    public unitConverterService: UnitConverterService,
  ) {
    this.unitConverterService.selectedChange.subscribe((_value) => {
      // reset converters
      this.model.length = this.model.length * this.converters.long_length.factor;
      this.model.weight = this.model.weight * this.converters.small_weight.factor;

      // update converters
      this.converters = unitConverterService.getConverters();

      // set length and weight according to new converters
      this.model.length = this.model.length / this.converters.long_length.factor;
      this.model.weight = this.model.weight / this.converters.small_weight.factor;

      // at last, update calculation
      this.calculate()
    })
  }

  ngOnInit(): void {
    this.converters = this.unitConverterService.getConverters();
    if (this.converters.small_weight.name === 'ounces') {
      this.model.weight = 3;
    }
  }

  calculate(): void {
    const normalized_length = this.model.length;
    const normalized_weight = this.model.weight * this.converters.small_weight.factor;
    this.grist = (normalized_length / normalized_weight) * this.converters.large_weight.factor;
  }

  resetSubmitted(): void {
    this.grist = 0;
  }

}
