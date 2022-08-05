import { footStitches, toeNumbers, footRows } from './calculators';
import { defaultDistanceInCM } from './constants';
import { FootMeasurements, GaugeSettings, ToeNumbers } from './types';

const gauge = new GaugeSettings(defaultDistanceInCM, defaultDistanceInCM, 30, 42, "2.25mm DPN", "Random Superwash Sock");
const foot = new FootMeasurements(23, 6, 22, 24);

describe('footStitches', ()=>{
  it('size EU38', ()=>{
    expect(footStitches(foot.forefootCircumference, gauge)).toBe(60);
  });
});

describe('toeNumbers', ()=>{
  interface TestCase{
    footStitches: number,
    expectedToeNumbers: ToeNumbers,
  }
  const testCases: TestCase[]=[
    {
      footStitches: 64,
      expectedToeNumbers: new ToeNumbers(32, 16),
    }, {
      footStitches: 68,
      expectedToeNumbers: new ToeNumbers(36, 16),
    },
  ];
  testCases.forEach((tc, i)=>{
    it(i.toString(), ()=>{
      expect(toeNumbers(tc.footStitches)).toEqual(tc.expectedToeNumbers);
    });
  });
});

describe('footRows', ()=>{
  it('size 38', ()=>{
    expect(footRows(foot.length, gauge)).toBe(101);
  });
});
