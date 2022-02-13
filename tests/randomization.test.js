const { emailToRandomizationScore } = require('../randomization');

const testCases = [
  {
    email: 'ZZZ@test.com',
    expectedScore: 1,
  },
  {
    email: 'zzz@test.com',
    expectedScore: 1,
  },
  {
    email: 'z@example.com',
    expectedScore: 1,
  },
  {
    email: 'aAAa@example.com',
    expectedScore: 0,
  },
  {
    email: 'ed@zzish.com',
    expectedScore: 0.14,
  },
  {
    email: 'thom@zzish.com',
    expectedScore: 0.52,
  },
]

describe("get randomization score", () => {
  test('it should return a consistent randomization score given an email address', () => {
    for (const testCase of testCases) {
      const { email, expectedScore } = testCase;
      const randomizationScore = emailToRandomizationScore(email);
      expect(randomizationScore).toEqual(expectedScore);
    }
  });
});
