import { RoundUpToMultipleOf } from "./roundUpToMultiple.utils";

interface TestCase {
  num: number,
  multiple: number,
  forcedRoundUp: boolean,
  expected: number,
};

const testCases: TestCase[] = [
  {
    num: 62,
    multiple: 4,
    forcedRoundUp: false,
    expected: 64,
  }, {
    num: 62,
    multiple: 4,
    forcedRoundUp: true,
    expected: 64,
  }, {
    num: 64,
    multiple: 4,
    forcedRoundUp: true,
    expected: 68,
  }, {
    num: 64,
    multiple: 4,
    forcedRoundUp: false,
    expected: 64,
  },{
    num: 8,
    multiple: 2,
    forcedRoundUp: false,
    expected: 8,
  }, {
    num: 8,
    multiple: 2,
    forcedRoundUp: true,
    expected: 10,
  }, {
    num: 9,
    multiple: 2,
    forcedRoundUp: false,
    expected: 10,
  }, {
    num: 9,
    multiple: 2,
    forcedRoundUp: true,
    expected: 10,
  },
];

describe('RoundUpToMultipleOf: ', ()=>{
  beforeEach(()=>{});

  testCases.forEach((tc, i) => {
    it(i.toString(), () => {
      expect(RoundUpToMultipleOf(tc.num, tc.multiple, tc.forcedRoundUp)).toBe(tc.expected);
    });
  });
});
