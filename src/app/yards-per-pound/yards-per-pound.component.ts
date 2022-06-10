import { Component, OnInit } from '@angular/core';

class yppValues {
  constructor(
    public lengthUnits: string,
    public weightUnits: string,
    public length: number,
    public weight: number,
  ) {}
}

const conversions: Record<string,number> = {
  gram: 1,
  ounce: 28.3495,
  pound: 453.592,
  meter: 1,
  yard: 0.9144,
}

@Component({
  selector: 'app-yards-per-pound',
  templateUrl: './yards-per-pound.component.html',
  styleUrls: ['./yards-per-pound.component.css']
})
export class YardsPerPoundComponent implements OnInit {

  constructor() { }
  model = new yppValues("meter", "gram", 200, 100)
  meters_per_kg = 0;
  yards_per_pound = 0;

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit", JSON.stringify(this.model));
    const length_in_meters = this.model.length * conversions[this.model.lengthUnits];
    const weight_in_grams = this.model.weight * conversions[this.model.weightUnits];
    this.meters_per_kg = 1000 * length_in_meters / weight_in_grams;
    this.yards_per_pound =  1000 * (this.meters_per_kg / conversions["yard"]) / conversions["pound"];
  }

}
