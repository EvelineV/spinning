import { RoundUpToMultipleOf } from "../roundUpToMultiple.utils";
import { FootMeasurements, GaugeSettings, SockInstructions, ToeNumbers } from "./types";
import { negativeEase } from "./constants";

export function footStitches(footCircumference: number, gauge: GaugeSettings): number {
  const stitchesPerUnit = gauge.horizontalStitches / gauge.horizontalDistance;
  const stitchesPerRound = stitchesPerUnit * footCircumference * (1 - negativeEase / 100);
  return RoundUpToMultipleOf(stitchesPerRound, 4, true);
}

export function toeNumbers(footStitches: number): ToeNumbers {
  const castOnStitches = RoundUpToMultipleOf(footStitches / 2, 4, false);
  const toeRows = 0.5 * (footStitches-castOnStitches);
  return new ToeNumbers(castOnStitches, toeRows);
}

export function footRows(length: number, gauge: GaugeSettings): number {
  const rowsPerUnit = gauge.verticalStitches / gauge.verticalDistance;
  const rows = rowsPerUnit * length;
  return Math.ceil(rows);
}

export function calculateSock(foot: FootMeasurements, gauge: GaugeSettings): SockInstructions {
  const stitches = footStitches(foot.forefootCircumference, gauge);
  const toe = toeNumbers(stitches);
  const rows = footRows(foot.length, gauge);
  return new SockInstructions(
    toe,
    rows
  );
}
