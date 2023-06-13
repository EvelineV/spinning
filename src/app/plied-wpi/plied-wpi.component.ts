import { Component, OnInit } from '@angular/core';

export class Ply {
  public singles_wpi: number;
  public num_plies: number;
  public singles_tpi?: number|undefined;

  constructor(payload: Partial<Ply>) {
    this.singles_wpi = payload.singles_wpi || 0;
    this.num_plies = payload.num_plies || 0;
    this.singles_tpi = payload.singles_tpi || 0;
  }

  calculateWPI(): number {
    const numPlyFactor: Record<number, number> = {
      2: 3/2,
      3: 2.0,
      4: 2.2,  // missing in literature: ran a least-squares fit through the other three data points
      5: 5/2,
    }
    return this.singles_wpi / numPlyFactor[this.num_plies];
  }

  calculateBPI(): number {
    if (this.singles_tpi) {
      return this.singles_tpi * this.num_plies;
    }
    return 0;
  }
}

@Component({
  selector: 'app-plied-wpi',
  templateUrl: './plied-wpi.component.html',
})
export class PliedWpiComponent implements OnInit {
  plied_wpi = 0;
  plied_bpi = 0;
  model = new Ply({ singles_wpi: 14, num_plies: 3, });

  constructor() { }

  ngOnInit(): void {}

  resetSubmitted(): void {
    this.plied_wpi = 0;
  }

  onSubmit(): void {
    this.plied_wpi = this.model.calculateWPI();
    this.plied_bpi = this.model.calculateBPI();
  }
}
