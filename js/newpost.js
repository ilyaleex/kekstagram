/* eslint-disable eol-last */
function stringLengthValidation(string, maxLength) {
  return string.length >= maxLength;
}

stringLengthValidation('string', 140);

export {stringLengthValidation};