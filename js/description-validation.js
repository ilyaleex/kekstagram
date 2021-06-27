const MAX_SYMBOLS_VALUE = 140;
const descriptionInput = document.querySelector('.text__description');

descriptionInput.addEventListener('input', () =>{
  const descriptionValue = descriptionInput.value.length;
  if (descriptionValue > MAX_SYMBOLS_VALUE) {
    descriptionInput.setCustomValidity(`Описание не должно превышать ${MAX_SYMBOLS_VALUE} симв.`);
    descriptionInput.style.borderColor = 'red';
  } else {
    descriptionInput.setCustomValidity('');
    descriptionInput.style.borderColor = '';
  }
  descriptionInput.reportValidity();
});

