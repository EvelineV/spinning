import { Component, OnInit } from '@angular/core';

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
})
export class GristComponent implements OnInit {

  model = new Grist({length: 200, weight: 100});
  grist_metric = 0;
  grist_imperial = 0;

  ngOnInit(): void {}

  calculate(): void {
    
    this.grist_metric = (this.model.length / this.model.weight) * 1000;
    this.grist_imperial = this.grist_metric * 0.49605464902; // ???
    // 1 m = 1.0936133 yards
    // 1kg = 2.20462262 pounds
  }

  resetSubmitted(): void {
    this.grist_metric = 0;
    this.grist_imperial = 0;
  }

}
