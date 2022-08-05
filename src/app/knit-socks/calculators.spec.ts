import { getStitchesInRound, getToe, getRows, getHeel, calculateSock } from './calculators';
import { defaultDistanceInCM } from './constants';
import { FootMeasurements, GaugeSettings, Toe, Heel, SockInstructions, Foot } from './types';

const gauge = new GaugeSettings(defaultDistanceInCM, defaultDistanceInCM, 30, 42, "2.25mm DPN", "Random Superwash Sock");
const foot = new FootMeasurements(23, 6, 22, 24);

describe('getStitchesInRound', ()=>{
  it('size EU38', ()=>{
    expect(getStitchesInRound(foot.forefootCircumference, gauge)).toBe(60);
  });
});

describe('getToe', ()=>{
  interface TestCase{
    footStitches: number,
    expectedToe: Toe,
  }
  const testCases: TestCase[]=[
    {
      footStitches: 64,
      expectedToe: new Toe(32, 16),
    }, {
      footStitches: 68,
      expectedToe: new Toe(36, 16),
    },
  ];
  testCases.forEach((tc, i)=>{
    it(i.toString(), ()=>{
      expect(getToe(tc.footStitches)).toEqual(tc.expectedToe);
    });
  });
});

describe('getRows', ()=>{
  it('size 38', ()=>{
    expect(getRows(foot.length, gauge)).toBe(101);
  });
});

describe('getHeel', ()=>{
  it('size 38', ()=>{
    const expectedHeel = new Heel(20, 4, 16, 30, 80, 34);
    expect(getHeel(60, foot, gauge)).toEqual(expectedHeel);
  });
});

describe('calculateSock', ()=>{
  it('size 38', ()=>{
    const expectedSockInstructions = new SockInstructions(
      new Toe(32, 14),
      new Foot(37, 60),
      64,
      new Heel(20, 4, 16, 30, 80, 34),
    )
    expect(calculateSock(foot, gauge)).toEqual(expectedSockInstructions);
  });
});
