/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
import {isEscEvent} from './util.js';
import {imgPreviewPic, effectLevelSlider} from './effects.js';
import {imgPreview} from './scale.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelUpload = uploadForm.querySelector('#upload-cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');
const scaleInput = document.querySelector('.scale__control--value');
const effectNone = document.querySelector('#effect-none');

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
  effectNone.checked = true;
  imgPreviewPic.style.filter = 'none';
  effectLevelSlider.classList.add('hidden');
  descriptionInput.setCustomValidity('');
  descriptionInput.style.borderColor = '';
  hashtagsInput.setCustomValidity('');
  hashtagsInput.style.borderColor = '';
  scaleInput.value = '100%';
  const transformValue = `scale(${100 * 0.01})`;
  imgPreview.style.transform = transformValue;
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

export {popupEscKeydownHandler};
