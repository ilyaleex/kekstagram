import {thumbnailsRender} from './thumbnails.js';
import {getErrorData} from './form-error.js';

const getUsersPosts = (onError) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((usersPosts) => {
      thumbnailsRender(usersPosts);
    })
    .catch(() => onError());
};

getUsersPosts(getErrorData);
