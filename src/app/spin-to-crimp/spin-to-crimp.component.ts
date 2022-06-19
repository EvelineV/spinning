import { Component, OnInit } from '@angular/core';

export class WheelSettings {
  constructor(
    public cpi: number,
    public singles_ratio: number,
    public ply_ratio: number,
    public draft_length: number,
    public ply_length: number,
    public num_ply: number,
    public system_ply: string,
  ) { }
}

export class Results {
  constructor(
    public treadles_singles: number,
    public treadles_plying: number,
    public bpi: number,
  ) { }
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
  results = new Results(0, 0, 0);

  static calculate(ws: WheelSettings): Results {
    const multiplier: Record<string, Record<number, number>> = {
      "field": { 2: 1 / 2, 3: 3 / 4 },
      "ross": { 2: 2 / 3, 3: 3 / 4 },
    };

    const selected_multiplier = multiplier[ws.system_ply][ws.num_ply] + 1;
    const tpi_singles = ws.cpi * selected_multiplier;
    const twists_singles = tpi_singles * ws.draft_length;
    const num_treadles_singles = twists_singles / ws.singles_ratio;

    const twists_plying = tpi_singles * ws.ply_length;
    const num_treadles_plying = twists_plying / ws.ply_ratio;

    const bpi = ws.cpi * ws.num_ply;
    const treadles_plying = num_treadles_plying;
    const treadles_singles = num_treadles_singles;
    return new Results(treadles_singles, treadles_plying, bpi);
  }

  onSubmit(): void {
    this.results = SpinToCrimpComponent.calculate(this.model);
  }
}
