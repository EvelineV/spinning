export function RoundUpToMultipleOf(num: number, multiple: number, forcedRoundUp: boolean): number {
  if ( num % multiple === 0 && forcedRoundUp) {
    num += 1;
  }
  return multiple * (Math.ceil(num/multiple));
}
