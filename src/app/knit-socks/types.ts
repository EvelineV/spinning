export class FootMeasurements {
  constructor(
    public legCircumference: number,
    public instepHeight: number,
    public forefootCircumference: number,
    public length: number,
  ){}
}

export class GaugeSettings {
  constructor(
    public horizontalDistance: number,
    public verticalDistance: number,
    public horizontalStitches: number,
    public verticalStitches: number,
    public needle: string,
    public yarn: string,
  ){}
}

export class Toe {
  constructor(
    public castOnStitches: number,
    public rows: number,
  ){}
 }

 export class Foot {
  constructor(
    public rows: number,
    public stitchesInRound: number,
  ){}
 }

 export class Heel {
  constructor(
    public startTurnStitches: number,
    public endTurnStitches: number,
    public bottomRows: number,
    public flapRows: number,
    public gussetStitchesAtWidest: number,
    public gussetRows: number,
  ){}
 }

 export class SockInstructions {
  constructor(
    public toe: Toe,
    public foot: Foot,
    public roundLegStitches: number,
    public heel: Heel,
  ){}
 }
