/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const descriptionInput = document.querySelector('.text__description');
const MAX_SYMBOLS_VALUE = descriptionInput.maxLength;

descriptionInput.addEventListener('input', () =>{
  const descriptionValue = descriptionInput.value.length;
  if (descriptionValue == MAX_SYMBOLS_VALUE) {
    descriptionInput.setCustomValidity(`Описание не должно превышать ${MAX_SYMBOLS_VALUE} символов.`);
    descriptionInput.style.borderColor = 'red';
  } else {
    descriptionInput.setCustomValidity('');
    descriptionInput.style.borderColor = 'green';
  }
  descriptionInput.reportValidity();
});

