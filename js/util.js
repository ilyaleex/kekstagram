/* eslint-disable id-length */
function stringLengthValidation(string, maxLength) {
  return string.length >= maxLength;
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Fisher-Yates algorithm
const shuffle = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
};

const sortByField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

export {stringLengthValidation, isEscEvent, shuffle, sortByField};
