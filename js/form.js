/* eslint-disable no-use-before-define */
import {isEscEvent} from './util.js';
import {effectSlider} from './effects.js';
import {imgPreview, setImgScale} from './scale.js';

const uploadForm = document.querySelector('.img-upload__form');
const imgEditing = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelUpload = imgEditing.querySelector('#upload-cancel');
const hashtagsInput = imgEditing.querySelector('.text__hashtags');
const descriptionInput = imgEditing.querySelector('.text__description');

const popupEscKeydownHandler = (evt) => {
  if (hashtagsInput !== document.activeElement && descriptionInput !== document.activeElement) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeUploadForm();
    }
  }
};

function closeUploadForm () {
  uploadForm.reset();
  imgEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgPreview.style.filter = 'none';
  effectSlider.classList.add('hidden');
  descriptionInput.style.borderColor = '';
  hashtagsInput.style.borderColor = '';
  setImgScale(100);
}

function openUploadForm () {
  imgEditing.classList.remove('hidden');
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

export {popupEscKeydownHandler};
