import {closeUploadForm, closeErrorMessageModal} from './form.js';

const error = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const errorButtonTemplate = error.querySelector('.error__button');
const errorTitileTemplate = error.querySelector('.error__title');
const errorUploadImageTemplate = error.cloneNode(true);

const getErrorData = () => {

  const showErrorMessage = () => {
    errorTitileTemplate.textContent = 'Ошибка';
    errorButtonTemplate.textContent = 'Ок';
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);
    closeErrorMessageModal();
  };
  showErrorMessage();
};

const onFormErrorSend = () => {
  closeUploadForm();
  errorFragment.appendChild(errorUploadImageTemplate);
  document.body.appendChild(errorFragment);
  closeErrorMessageModal();
};

export {getErrorData, onFormErrorSend};

