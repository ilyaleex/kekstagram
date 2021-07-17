/* eslint-disable no-use-before-define */
import {isEscEvent} from './util.js';
import {effectSlider} from './effects.js';
import {imgPreview, setImgScale} from './scale.js';

const uploadForm = document.querySelector('.img-upload__form');
const imageEditing = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelUpload = imageEditing.querySelector('#upload-cancel');
const hashtagsInput = imageEditing.querySelector('.text__hashtags');
const descriptionInput = imageEditing.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (hashtagsInput !== document.activeElement && descriptionInput !== document.activeElement) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeUploadForm();
    }
  }
};

function closeUploadForm () {
  uploadForm.reset();
  imageEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgPreview.style.filter = 'none';
  effectSlider.classList.add('hidden');
  descriptionInput.style.borderColor = '';
  hashtagsInput.style.borderColor = '';
  setImgScale(100);
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openUploadForm () {
  imageEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

uploadFile.addEventListener('change', () => {
  openUploadForm();
  document.addEventListener('keydown', onPopupEscKeydown);
});

cancelUpload.addEventListener('click', () => {
  closeUploadForm();
});

const removeListenerSuccessMessage = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.removeEventListener('click', onButtonModalSuccessClick);
  document.removeEventListener('keydown', onKeyToSuccessModalClick);
  successModal.removeEventListener('click', onModalSuccessOutsideClick);
};

function onButtonModalSuccessClick() {
  const successModal = document.querySelector('.success');
  removeListenerSuccessMessage();
  successModal.remove();
}

function onKeyToSuccessModalClick(evt) {
  if (isEscEvent(evt)) {
    const successModal = document.querySelector('.success');
    removeListenerSuccessMessage();
    successModal.remove();
  }
}

function onModalSuccessOutsideClick(evt) {
  const successInnerTemplate = evt.currentTarget.querySelector('.success__inner');
  const isClickInside = successInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerSuccessMessage();
    evt.currentTarget.remove();
  }
}

const closeSuccessMessageModal = () => {
  const successModal = document.querySelector('.success');
  const successModalButton = document.querySelector('.success__button');

  successModalButton.addEventListener('click', onButtonModalSuccessClick);
  document.addEventListener('keydown', onKeyToSuccessModalClick);
  successModal.addEventListener('click', onModalSuccessOutsideClick);
};

const removeListenerErrorMessage = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');

  errorModalButton.removeEventListener('click', onButtonModalErrorClick);
  document.removeEventListener('keydown', onKeyToErrorModalClick);
  errorModal.removeEventListener('click', onModalErrorOutsideClick);
};

function onButtonModalErrorClick() {
  const errorModal = document.querySelector('.error');
  removeListenerErrorMessage();
  errorModal.remove();
}

function onKeyToErrorModalClick(evt) {
  if (isEscEvent(evt)) {
    const errorModal = document.querySelector('.error');
    removeListenerErrorMessage();
    errorModal.remove();
  }
}

function onModalErrorOutsideClick(evt) {
  const errorInnerTemplate = evt.currentTarget.querySelector('.error__inner');
  const isClickInside = errorInnerTemplate.contains(evt.target);

  if (!isClickInside) {
    removeListenerErrorMessage();
    evt.currentTarget.remove();
  }
}

const closeErrorMessageModal = () => {
  const errorModal = document.querySelector('.error');
  const errorModalButton = document.querySelector('.error__button');
  errorModalButton.addEventListener('click', onButtonModalErrorClick);
  document.addEventListener('keydown', onKeyToErrorModalClick);
  errorModal.addEventListener('click', onModalErrorOutsideClick);
};

export {closeUploadForm, closeSuccessMessageModal, closeErrorMessageModal, onPopupEscKeydown};
