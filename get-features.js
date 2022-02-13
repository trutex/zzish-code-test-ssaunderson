const features = require('./features.json');
const { emailToRandomizationScore } = require('./randomization');

const isFeatureEnabledForLocation = (location, includedCountries, excludedCountries) => {
  const includedLocation = includedCountries.length === 0 || includedCountries.includes(location);
  const excludedLocation = excludedCountries.length > 0 && excludedCountries.includes(location);

  return includedLocation && !excludedLocation;
}

const isFeaureEnabledForUser = (feature, email, location) => {
  const { ratio, enabledEmails, includedCountries, excludedCountries } = feature;
  if (ratio === 0) {
    return false;
  }
  if (enabledEmails.includes(email)) {
    return true;
  }

  const locationOK = isFeatureEnabledForLocation(location, includedCountries, excludedCountries);

  if (locationOK) {
    const randomizationScore = emailToRandomizationScore(email);
    return randomizationScore <= ratio;
  }
  return false;
};

const getEnabledFeatures = (email, location) => {
  const enabledFeatures = features.filter(feature => isFeaureEnabledForUser(feature, email, location));
  return enabledFeatures;
};

module.exports = {
  getEnabledFeatures,
};