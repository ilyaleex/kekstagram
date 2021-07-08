import {closeMessageModal} from './form-error.js';
import {closeUploadForm} from './form.js';

const success = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();

const onFormSuccessSend = () => {
  closeUploadForm();

  const showSuccessMessage = () => {
    const successUploadImageTemplate = success.cloneNode(true);
    const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');
    const successInnerTemplate = successUploadImageTemplate.querySelector('.success__inner');
    successFragment.appendChild(successUploadImageTemplate);
    document.body.appendChild(successFragment);

    closeMessageModal(successUploadImageTemplate, successButtonTemplate, successInnerTemplate);
  };

  showSuccessMessage();
};

export {onFormSuccessSend};
