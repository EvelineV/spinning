export class GaugeSettings {
  public horizontalDistance: number;
  public verticalDistance: number;
  public horizontalStitches: number;
  public verticalStitches: number;
  public needle: string;
  public yarn: string;

  constructor(payload: Partial<GaugeSettings>){
    this.horizontalDistance = payload.horizontalDistance || 0;
    this.verticalDistance = payload.verticalDistance || 0;
    this.horizontalStitches = payload.horizontalStitches || 0;
    this.verticalStitches = payload.verticalStitches || 0;
    this.needle = payload.needle || '';
    this.yarn = payload.yarn || '';
  }
}
