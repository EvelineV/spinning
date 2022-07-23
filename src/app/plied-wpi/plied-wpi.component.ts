import { Component, OnInit } from '@angular/core';

export function calculate(singles_wpi: number, num_plies: number): number {
  const numPlyFactor: Record<number, number> = {
    2: 3/2,
    3: 2.0,
    4: 2.2,  // missing in literature: ran a least-squares fit through the other three data points
    5: 5/2,
  }
  return singles_wpi / numPlyFactor[num_plies];
}

@Component({
  selector: 'app-plied-wpi',
  templateUrl: './plied-wpi.component.html',
  styleUrls: ['./plied-wpi.component.css']
})
export class PliedWpiComponent implements OnInit {

  singles_wpi: number = 14;
  num_ply: number = 3;
  plied_wpi: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.plied_wpi = calculate(this.singles_wpi, this.num_ply);
  }

  onSinglesWPIChange(event: any) {
    this.singles_wpi = event.target.value as number;
    this.plied_wpi = calculate(this.singles_wpi, this.num_ply);
  }
  onNumPlyChange(event: any) {
    this.num_ply = event.target.value as number;
    this.plied_wpi = calculate(this.singles_wpi, this.num_ply);
  }
}
