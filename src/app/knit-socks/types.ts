export class FootMeasurements {
  public legCircumference: number;
  public instepHeight: number;
  public forefootCircumference: number;
  public length: number;

  constructor(payload: Partial<FootMeasurements>) {
    this.legCircumference = payload.legCircumference || 0;
    this.instepHeight = payload.instepHeight || 0;
    this.forefootCircumference = payload.forefootCircumference || 0;
    this.length = payload.length || 0;
  }
}

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

export class Toe {
  public castOnStitches: number;
  public rows: number;

  constructor(payload: Partial<Toe>){
    this.castOnStitches = payload.castOnStitches || 0;
    this.rows = payload.rows || 0;
  }
 }

 export class Foot {
  public rows: number;
  public stitchesInRound: number;

  constructor(payload: Partial<Foot>){
    this.rows = payload.rows || 0;
    this.stitchesInRound = payload.stitchesInRound || 0;
  }
 }

 export class Heel {
  public startTurnStitches: number;
  public endTurnStitches: number;
  public bottomRows: number;
  public flapRows: number;
  public gussetStitchesAtWidest: number;
  public gussetRows: number;

  constructor(payload: Partial<Heel>){
    this.startTurnStitches = payload.startTurnStitches || 0;
    this.endTurnStitches = payload.endTurnStitches || 0;
    this.bottomRows = payload.bottomRows || 0;
    this.flapRows = payload.flapRows || 0;
    this.gussetStitchesAtWidest = payload.gussetStitchesAtWidest || 0;
    this.gussetRows = payload.gussetRows || 0;
  }
 }

 export class SockInstructions {
  public toe: Toe;
  public foot: Foot;
  public roundLegStitches?: number;
  public heel: Heel;

  constructor(payload: Partial<SockInstructions>){
    this.toe = payload.toe || new Toe({});
    this.foot = payload.foot || new Foot({});
    this.roundLegStitches = payload.roundLegStitches || 0;
    this.heel = payload.heel || new Heel({});
  }
 }
