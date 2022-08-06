import { getStitchesInRound, getToe, getRows, getHeel, calculateSock } from './calculators';
import { defaultDistanceInCM } from './constants';
import { FootMeasurements, GaugeSettings, Toe, Heel, SockInstructions, Foot } from './types';

const gaugeRandom = new GaugeSettings({horizontalDistance: defaultDistanceInCM, verticalDistance: defaultDistanceInCM, horizontalStitches: 30, verticalStitches: 42, needle: "2.25mm DPN", yarn: "Random Superwash Sock"});
const gaugeSixPly = new GaugeSettings({horizontalDistance: defaultDistanceInCM, verticalDistance: defaultDistanceInCM, horizontalStitches: 28, verticalStitches: 45, needle: "2.75mm DPN", yarn: "Lana Grossa Meilenweit 6-ply"});

const footE = new FootMeasurements({ legCircumference: 23, instepHeight: 6, forefootCircumference: 22, length: 24});
const footA = new FootMeasurements({ legCircumference: 24, instepHeight: 5.5, forefootCircumference: 24.5, length: 25}); // unsure length
const footM = new FootMeasurements({ length: 27, legCircumference: 24, instepHeight: 5.2, forefootCircumference: 24.4});
const footB = new FootMeasurements({ length: 26, legCircumference: 26, instepHeight: 6, forefootCircumference: 26}); // unsure length

describe('getStitchesInRound', ()=>{
  it('size EU38', ()=>{
    expect(getStitchesInRound(footE.forefootCircumference, gaugeRandom)).toBe(60);
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
      expectedToe: new Toe({castOnStitches: 32, rows: 16}),
    }, {
      footStitches: 68,
      expectedToe: new Toe({castOnStitches: 36, rows: 16}),
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
    expect(getRows(footE.length, gaugeRandom)).toBe(101);
  });
});

describe('getHeel', ()=>{
  it('size 38', ()=>{
    const expectedHeel = new Heel({startTurnStitches: 20, endTurnStitches: 4, bottomRows: 16, flapRows: 30, gussetStitchesAtWidest: 80, gussetRows: 20});
    expect(getHeel(60, footE, gaugeRandom)).toEqual(expectedHeel);
  });
});

describe('calculateSock', ()=>{
  it('size 38', ()=>{
    const expectedSockInstructions = new SockInstructions({
      toe: new Toe({castOnStitches: 32, rows: 14}),
      foot: new Foot({ rows: 51, stitchesInRound: 60}),
      roundLegStitches: 64,
      heel: new Heel({startTurnStitches: 20, endTurnStitches: 4, bottomRows: 16, flapRows: 30, gussetStitchesAtWidest: 80, gussetRows: 20}),
    });
    expect(calculateSock(footE, gaugeRandom)).toEqual(expectedSockInstructions);
  });

  it('size 43', ()=>{
    const expectedSockInstructions = new SockInstructions({
      toe: new Toe({castOnStitches: 36, rows: 16}),
      foot: new Foot({rows: 61, stitchesInRound: 68}),
      roundLegStitches: 68,
      heel: new Heel({
        startTurnStitches: 24,
        endTurnStitches: 4,
        bottomRows: 20,
        flapRows: 32,
        gussetStitchesAtWidest: 88,
        gussetRows: 20,
      }),
    });
    expect(calculateSock(footB, gaugeSixPly)).toEqual(expectedSockInstructions);
  });

});
