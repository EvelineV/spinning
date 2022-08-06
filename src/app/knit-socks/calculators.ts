import { RoundUpToMultipleOf } from "../roundUpToMultiple.utils";
import { Foot, FootMeasurements, GaugeSettings, Heel, SockInstructions, Toe } from "./types";
import { negativeEase } from "./constants";

export function getStitchesInRound(circumference: number, gauge: GaugeSettings): number {
  const stitchesPerUnit = gauge.horizontalStitches / gauge.horizontalDistance;
  const stitchesPerRound = stitchesPerUnit * circumference * (1 - negativeEase / 100);
  return RoundUpToMultipleOf(stitchesPerRound, 4, true);
}

export function getToe(footStitches: number): Toe {
  const castOnStitches = RoundUpToMultipleOf(footStitches / 2, 4, false);
  const toeRows = 0.5 * (footStitches-castOnStitches);
  return new Toe({ castOnStitches: castOnStitches, rows: toeRows});
}

export function getRows(length: number, gauge: GaugeSettings): number {
  const rowsPerUnit = gauge.verticalStitches / gauge.verticalDistance;
  const rows = rowsPerUnit * length;
  return Math.ceil(rows);
}

export function getHeel(roundFootStitches: number, foot: FootMeasurements, gauge: GaugeSettings): Heel {
  const startTurnStitches = RoundUpToMultipleOf(roundFootStitches/3, 2, false);
  const endTurnStitches = 4;
  const bottomRows = startTurnStitches - endTurnStitches;
  const flapRows = RoundUpToMultipleOf(getRows(foot.instepHeight+1, gauge), 2, false);

  const gussetStitchesAtWidest = startTurnStitches + 2 * flapRows;
  const gussetRows = gussetStitchesAtWidest - roundFootStitches;

  return new Heel({
    startTurnStitches,
    endTurnStitches,
    bottomRows,
    flapRows,
    gussetStitchesAtWidest,
    gussetRows,
  });
}

export function calculateSock(foot: FootMeasurements, gauge: GaugeSettings): SockInstructions {
  const roundFootStitches = getStitchesInRound(foot.forefootCircumference, gauge);
  const toe = getToe(roundFootStitches);
  const totalRows = getRows(foot.length, gauge);
  const heel = getHeel(roundFootStitches, foot, gauge);
  const footRows = totalRows - toe.rows - heel.gussetRows - heel.bottomRows;
  const straightFoot = new Foot({ rows: footRows, stitchesInRound: roundFootStitches });
  const roundLegStitches = getStitchesInRound(foot.legCircumference, gauge);

  return new SockInstructions({
    toe: toe,
    foot: straightFoot,
    roundLegStitches: roundLegStitches,
    heel: heel,
  });
}
