/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
import { isEscEvent } from './util.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelUpload = uploadForm.querySelector('#upload-cancel');
const filterNone = uploadForm.querySelector('#effect-none');

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');


const popupEscKeydownHandler = (evt) => {
  if (hashtagsInput !== document.activeElement && descriptionInput !== document.activeElement) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeUploadForm();
    }
  }
};

function closeUploadForm () {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  hashtagsInput.value = '';
  descriptionInput.value = '';
  uploadFile.value = '';
  filterNone.checked = true;
  descriptionInput.setCustomValidity('');
  descriptionInput.style.borderColor = '';
  hashtagsInput.setCustomValidity('');
  hashtagsInput.style.borderColor = '';
}

function openUploadForm () {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

uploadFile.addEventListener('change', () => {
  openUploadForm();
  document.addEventListener('keydown', popupEscKeydownHandler);
});

cancelUpload.addEventListener('click', () => {
  closeUploadForm();
  document.removeEventListener('keydown', popupEscKeydownHandler);
});