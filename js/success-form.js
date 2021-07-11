import {closeUploadForm, closeSuccessMessageModal} from './form.js';

const success = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();
const successUploadImageTemplate = success.cloneNode(true);

const onFormSuccessSend = () => {
  closeUploadForm();
  successFragment.appendChild(successUploadImageTemplate);
  document.body.appendChild(successFragment);
  closeSuccessMessageModal();
};

export {onFormSuccessSend};
