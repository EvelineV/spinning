import { GaugeSettings } from "../knit-gauge-component/types";
import { defaultDistanceInCM } from "../knit-gauge-component/constants";

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

export class SockGaugeSettings extends GaugeSettings{

  public ease: number; // percent

  constructor(payload: Partial<SockGaugeSettings>){
    super({
      horizontalDistance: defaultDistanceInCM,
      verticalDistance: defaultDistanceInCM,
      horizontalStitches: 30,
      verticalStitches: 42,
      needle: "2.25mm DPN",
      yarn: "Random Superwash Sock",
    });
    this.ease = payload.ease || -5;
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
  public extraIncreases: number;

  constructor(payload: Partial<Heel>){
    this.startTurnStitches = payload.startTurnStitches || 0;
    this.endTurnStitches = payload.endTurnStitches || 0;
    this.bottomRows = payload.bottomRows || 0;
    this.flapRows = payload.flapRows || 0;
    this.gussetStitchesAtWidest = payload.gussetStitchesAtWidest || 0;
    this.gussetRows = payload.gussetRows || 0;
    this.extraIncreases = payload.extraIncreases || 0;
  }
 }

 export class Leg {
  public roundLegStitches?: number;
  public legIncreases?: number;
  public action?: 'increase'|'decrease'|null;
  
  constructor(payload: Partial<Leg>) {
    this.roundLegStitches = payload.roundLegStitches || 0;
    this.legIncreases = payload.legIncreases || 0;
    this.action = payload.action || null;
  }
 }

 export class SockInstructions {
  public toe: Toe;
  public foot: Foot;
  public heel: Heel;
  public leg: Leg;

  constructor(payload: Partial<SockInstructions>){
    this.toe = payload.toe || new Toe({});
    this.foot = payload.foot || new Foot({});
    this.leg = payload.leg || new Leg({});
    this.heel = payload.heel || new Heel({});
  }
 }
