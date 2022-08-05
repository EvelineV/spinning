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

export class ToeNumbers {
  constructor(
    public castOnStitches: number,
    public toeRows: number,
  ){}
 }

 export class SockInstructions {
  constructor(
    public toeNumbers: ToeNumbers,
    public totalFootRows: number,
  ){}
 }
