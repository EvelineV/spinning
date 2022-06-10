import { Component, OnInit } from '@angular/core';

class WheelSettings{
  constructor(
    public cpi: number,
    public singles_ratio: number,
    public ply_ratio: number,
    public draft_length: number,
    public ply_length: number,
    public num_ply: number,
    public system_ply: string,
  ) {}
}

@Component({
  selector: 'app-spin-to-crimp',
  templateUrl: './spin-to-crimp.component.html',
  styleUrls: ['./spin-to-crimp.component.css']
})
export class SpinToCrimpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new WheelSettings(5, 17, 17, 20, 12, 2, "ross");
  submitted = false;
  results = {
    treadles_singles: 0,
    treadles_plying: 0,
    bpi: 0
  };

  onSubmit() { 
    const multiplier: Record<string, Record<number, number>> = {
      "field": {2: 1/2, 3: 3/4},
      "ross": {2: 2/3, 3: 3/4},
    };

    const selected_multiplier = multiplier[this.model.system_ply][this.model.num_ply] + 1;
    const tpi_singles = this.model.cpi * selected_multiplier;
    const twists_singles = tpi_singles * this.model.draft_length;
    const num_treadles_singles = twists_singles / this.model.singles_ratio;

    const twists_plying = tpi_singles * this.model.ply_length;
    const num_treadles_plying = twists_plying / this.model.ply_ratio;

    this.results.bpi = this.model.cpi * this.model.num_ply;
    this.results.treadles_plying = num_treadles_plying;
    this.results.treadles_singles = num_treadles_singles;
  }
}
