/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
import {isEscEvent} from './util.js';
const uploadForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelUploadFile = document.querySelector('#upload-cancel');

const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

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
}

function openUploadForm () {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

uploadFile.addEventListener('click', () => {
  openUploadForm();
  document.addEventListener('keydown', popupEscKeydownHandler);
});

cancelUploadFile.addEventListener('click', () => {
  closeUploadForm();
  document.removeEventListener('keydown', popupEscKeydownHandler);
});
