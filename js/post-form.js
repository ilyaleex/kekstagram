import {onFormSuccessSend} from './success-form.js';
import {onFormErrorSend} from './form-error.js';

const URL = 'https://23.javascript.pages.academy/kekstagram';
const uploadImageForm = document.querySelector('.img-upload__form');

const setUserFormSubmit = (onSuccess, onError) => {
  uploadImageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      URL,
      {
        method: 'POST',
        body: formData,
      })
      .then(() => onSuccess())
      .catch(() => onError());
  });
};

setUserFormSubmit(onFormSuccessSend, onFormErrorSend);
