import {isEscEvent} from './util.js';
import {closeUploadForm} from './form.js';

const error = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();

const closeMessageModal = (messageTemplate, messageCloseButton, messageInner) => {
  messageCloseButton.addEventListener('click', () => {
    messageTemplate.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      messageTemplate.remove();
    }
  });
  messageTemplate.addEventListener('click', (evt) => {
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      messageTemplate.remove();
    }
  });
};

const getErrorData = () => {

  const showErrorMessage = () => {
    const errorGetImageTemplate = error.cloneNode(true);
    const errorButtonTemplate = errorGetImageTemplate.querySelector('.error__button');
    const errorTitileTemplate = errorGetImageTemplate.querySelector('.error__title');
    const errorInnerTemplate = errorGetImageTemplate.querySelector('.error__inner');
    errorTitileTemplate.textContent = 'Ошибка';
    errorButtonTemplate.textContent = 'Ок';

    errorFragment.appendChild(errorGetImageTemplate);
    document.body.appendChild(errorFragment);

    closeMessageModal(errorGetImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };
  showErrorMessage();
};

const onFormErrorSend = () => {

  closeUploadForm();

  const showErrorMessage = () => {
    const errorUploadImageTemplate = error.cloneNode(true);
    const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');
    const errorInnerTemplate = errorUploadImageTemplate.querySelector('.error__inner');
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);

    closeMessageModal(errorUploadImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };

  showErrorMessage();
};

export {getErrorData, onFormErrorSend, closeMessageModal};

