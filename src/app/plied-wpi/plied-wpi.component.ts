import { Component, OnInit } from '@angular/core';

export class Ply {
  public singles_wpi: number;
  public num_plies: number;

  constructor(payload: Partial<Ply>) {
    this.singles_wpi = payload.singles_wpi || 0;
    this.num_plies = payload.num_plies || 0;
  }

  calculate(): number {
    const numPlyFactor: Record<number, number> = {
      2: 3/2,
      3: 2.0,
      4: 2.2,  // missing in literature: ran a least-squares fit through the other three data points
      5: 5/2,
    }
    return this.singles_wpi / numPlyFactor[this.num_plies];
  }
}

@Component({
  selector: 'app-plied-wpi',
  templateUrl: './plied-wpi.component.html',
  styleUrls: ['./plied-wpi.component.css']
})
export class PliedWpiComponent implements OnInit {
  plied_wpi = 0;
  model = new Ply({ singles_wpi: 14, num_plies: 3, });

  constructor() { }

  ngOnInit(): void {}

  resetSubmitted(): void {
    this.plied_wpi = 0;
  }

  onSubmit(): void {
    this.plied_wpi = this.model.calculate();
  }
}
