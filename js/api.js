import {thumbnailsRender} from './thumbnails.js';
import {getErrorData} from './form-error.js';

const URL_DATA = 'https://23.javascript.pages.academy/kekstagram/data';

const getUsersPosts = (onError) => {
  fetch(URL_DATA)
    .then((response) => response.json())
    .then((usersPosts) => {
      thumbnailsRender(usersPosts);
    })
    .catch(() => onError());
};

getUsersPosts(getErrorData);
