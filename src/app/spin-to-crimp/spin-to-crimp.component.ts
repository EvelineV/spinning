import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from '../unit-converter.service';

export class WheelSettings {
  constructor(
    public cpi: number,
    public singles_ratio: number,
    public ply_ratio: number,
    public draft_distance: number,
    public ply_distance: number,
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
})
export class SpinToCrimpComponent implements OnInit {

  converter: any;
  model = new WheelSettings(5, 17, 17, 50, 30, 2, "ross"); // this assumes we're metric
  results?: Results;

  constructor(
    public unitConverterService: UnitConverterService,
  ) {
    this.unitConverterService.selectedChange.subscribe((_value) => {
      // reset converters
      this.model.draft_distance = this.model.draft_distance * this.converter.factor;
      this.model.ply_distance = this.model.ply_distance * this.converter.factor;

      // update converters
      this.converter = unitConverterService.getConverters()['short_length'];

      // set drafting and plying distance according to new converters
      this.model.draft_distance = this.model.draft_distance / this.converter.factor;
      this.model.ply_distance = this.model.ply_distance / this.converter.factor;

      // at last, update calculation
      SpinToCrimpComponent.calculate(this.model, this.converter.name);
    })
  }

  ngOnInit(): void {
    this.converter = this.unitConverterService.getConverters()['short_length'];
    if (this.converter.name == "inches") {
      // if we are already on imperial when this page is loaded, set the initial values to inches
      this.model.draft_distance = 20;
      this.model.ply_distance = 12;
    }
    SpinToCrimpComponent.calculate(this.model, this.converter.name);
  }

  static calculate(ws: WheelSettings, c: string): Results {
    const inches_correction = c == "inches" ? 1 : 2.54;
    const multiplier: Record<string, Record<number, number>> = {
      "field": { 2: 1 / 2, 3: 3 / 4 },
      "ross": { 2: 2 / 3, 3: 3 / 4 },
    };

    const selected_multiplier = multiplier[ws.system_ply][ws.num_ply] + 1;
    const tpi_singles = ws.cpi * selected_multiplier;
    const twists_singles = tpi_singles * ws.draft_distance / inches_correction;
    const num_treadles_singles = twists_singles / ws.singles_ratio;

    const twists_plying = tpi_singles * ws.ply_distance / inches_correction;
    const num_treadles_plying = twists_plying / ws.ply_ratio;

    const bpi = ws.cpi * ws.num_ply;
    const treadles_plying = num_treadles_plying;
    const treadles_singles = num_treadles_singles;
    return new Results(treadles_singles, treadles_plying, bpi);
  }

  onSubmit(): void {
    this.results = SpinToCrimpComponent.calculate(this.model, this.converter.name);
  }

  resetSubmitted(): void {
    this.results = undefined;
  }
}
