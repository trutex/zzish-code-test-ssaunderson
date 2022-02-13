const ASCII_CODE_A = 97;
const MAX_LETTER_VALUE = 25;

const getAverageValue = (values) => {
  const sum = values.reduce((a, b) => a + b, 0);
  return sum / values.length;
}

const getAlphabetIndex = (str, position) => str.toLowerCase().charCodeAt(position) - ASCII_CODE_A;

const emailToRandomizationScore = (email) => {
  if (!email) {
    return 0;
  }
  const user = email.split('@')[0];
  const letterValues = []
  for (let i = 0; i < user.length; i++) {
    const letterValue = getAlphabetIndex(user, i);
    letterValues.push(letterValue);
  }
  const averageLetterValue = getAverageValue(letterValues);
  const randomizationScore = averageLetterValue / MAX_LETTER_VALUE;

  return randomizationScore;
};

module.exports = {
  emailToRandomizationScore,
};