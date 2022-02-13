const { getEnabledFeatures } = require('../get-features');

const testCases = [
  {
    user: { email: 'ed@zzish.com', location: 'GB' },
    expectedFeatureNames: ['SuperCoolFeature'],
  },
  {
    user: { email: 'aaa@zzish.com', location: 'US' },
    expectedFeatureNames: ['MarketingBanner', 'EnhancedDashboardFeature', 'NewUserOnboardingJourney'],
  },
  {
    user: { email: 'zzz@zzish.com', location: 'US' },
    expectedFeatureNames: ['MarketingBanner'],
  },
]

describe("get enabled features", () => {
  test('it should return the correct features for user', () => {
    for (const testCase of testCases) {
      const { email, location } = testCase.user;
      const features = getEnabledFeatures(email, location);
      expect(features.map(feature => feature.name)).toEqual(testCase.expectedFeatureNames);
    }
  });
});
