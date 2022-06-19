import { Component, OnInit } from '@angular/core';

export class gristValues {
  constructor(
    public lengthUnits: string,
    public weightUnits: string,
    public length: number,
    public weight: number,
  ) { }
}

const conversions: Record<string, number> = {
  gram: 1,
  ounce: 28.3495,
  pound: 453.592,
  meter: 1,
  yard: 0.9144,
}

@Component({
  selector: 'app-grist',
  templateUrl: './grist.component.html',
  styleUrls: ['./grist.component.css']
})
export class GristComponent implements OnInit {

  constructor() { }
  model = new gristValues("meter", "gram", 200, 100)
  meters_per_kg = 0;
  yards_per_pound = 0;

  ngOnInit(): void {
  }

  static calculate(v: gristValues): number[] {
    const length_in_meters = v.length * conversions[v.lengthUnits];
    const weight_in_grams = v.weight * conversions[v.weightUnits];
    const meters_per_kg = 1000 * length_in_meters / weight_in_grams;
    const yards_per_pound = 1000 * (meters_per_kg / conversions["yard"]) / conversions["pound"];
    return [meters_per_kg, yards_per_pound];
  }

  onSubmit() {
    [this.meters_per_kg, this.yards_per_pound] = GristComponent.calculate(
      new gristValues(
        this.model.lengthUnits,
        this.model.weightUnits,
        this.model.length,
        this.model.weight,
      )
    );
  }

}
