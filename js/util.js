/* eslint-disable eol-last */
function stringLengthValidation(string, maxLength) {
  return string.length >= maxLength;
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {stringLengthValidation, isEscEvent};
