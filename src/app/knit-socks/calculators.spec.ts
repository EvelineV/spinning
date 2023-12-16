import { getStitchesInRound, getToe, getRows, getHeel, calculateSock } from './calculators';
import { defaultDistanceInCM } from '../knit-gauge-component/constants';
import { FootMeasurements, SockGaugeSettings, Toe, Heel, SockInstructions, Foot } from './types';

const gaugeRandom = new SockGaugeSettings({ease: -10, horizontalDistance: defaultDistanceInCM, verticalDistance: defaultDistanceInCM, horizontalStitches: 30, verticalStitches: 42, needle: "2.25mm DPN", yarn: "Random Superwash Sock"});
const gaugeSixPly = new SockGaugeSettings({ease: -10, horizontalDistance: defaultDistanceInCM, verticalDistance: defaultDistanceInCM, horizontalStitches: 28, verticalStitches: 45, needle: "2.75mm DPN", yarn: "Lana Grossa Meilenweit 6-ply"});

const footE = new FootMeasurements({ legCircumference: 23, instepHeight: 6, forefootCircumference: 22, length: 24});
const footA = new FootMeasurements({ legCircumference: 24, instepHeight: 5.5, forefootCircumference: 24.5, length: 25});
const footM = new FootMeasurements({ length: 27, legCircumference: 24, instepHeight: 5.2, forefootCircumference: 24.4});
const footB = new FootMeasurements({ length: 26, legCircumference: 26, instepHeight: 6, forefootCircumference: 26});

describe('getStitchesInRound', ()=>{
  it('size EU38', ()=>{
    expect(getStitchesInRound(footE.forefootCircumference, gaugeRandom)).toBe(60);
  });
});

describe('getToe', ()=>{
  type TestCase = {
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
    it(`Toe ${i.toString()}`, ()=>{
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
    const expectedHeel = new Heel({
      startTurnStitches: 20,
      endTurnStitches: 4,
      bottomRows: 16,
      flapRows: 30,
      gussetStitchesAtWidest: 80,
      gussetRows: 20,
      extraIncreases: 5,
    });
    expect(getHeel(60, footE, gaugeRandom)).toEqual(expectedHeel);
  });
});

describe('calculateSock', ()=>{
  type TestCase = {
    name: string,
    foot: FootMeasurements;
    gauge: SockGaugeSettings;
    expected: SockInstructions;
    totalRows: number;
  }
  const testCases: TestCase[]=[
    {
      name: 'size 38',
      foot: footE,
      gauge: gaugeRandom,
      expected: new SockInstructions({
        toe: new Toe({castOnStitches: 32, rows: 14}),
        foot: new Foot({ rows: 51, stitchesInRound: 60}),
        roundLegStitches: 64,
        heel: new Heel({
          startTurnStitches: 20,
          endTurnStitches: 4,
          bottomRows: 16,
          flapRows: 30,
          gussetStitchesAtWidest: 80,
          gussetRows: 20,
          extraIncreases: 5,
        }),
      }),
      totalRows: 101,
    }, {
      name: 'size 38 looser',
      foot: footE,
      gauge: {...gaugeRandom, ease: -5, },
      expected: new SockInstructions({
        toe: new Toe({castOnStitches: 32, rows: 16}),
        foot: new Foot({ rows: 49, stitchesInRound: 64}),
        roundLegStitches: 68,
        heel: new Heel({
          startTurnStitches: 22,
          endTurnStitches: 4,
          bottomRows: 18,
          flapRows: 30,
          gussetStitchesAtWidest: 82,
          gussetRows: 18,
          extraIncreases: 5,
        }),
      }),
      totalRows: 101,
    }, {
      name: 'size 43',
      foot: footB,
      gauge: gaugeSixPly,
      expected: new SockInstructions({
        toe: new Toe({castOnStitches: 36, rows: 18}),
        foot: new Foot({rows: 60, stitchesInRound: 72}),
        roundLegStitches: 72,
        heel: new Heel({
          startTurnStitches: 24,
          endTurnStitches: 4,
          bottomRows: 20,
          flapRows: 30,
          gussetStitchesAtWidest: 84,
          gussetRows: 12,
          extraIncreases: 6,
        }),
      }),
      totalRows: 110,
    }
  ];
  testCases.forEach((tc)=>{
    it(tc.name, ()=>{
      const sock = calculateSock(tc.foot, tc.gauge)
      expect(sock).toEqual(tc.expected);
      expect(sock.toe.rows + sock.foot.rows + sock.heel.gussetRows + sock.heel.bottomRows).toBe(tc.totalRows);
    })
  });
});
