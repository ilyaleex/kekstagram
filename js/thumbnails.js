/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

const thumbnail = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const thumbnailsRender = (array) => {
  const picturesFragment = document.createDocumentFragment();
  array.forEach(({url, likes, comments}) => {
    const pictureElement = thumbnail.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });
  pictures.appendChild(picturesFragment);
};

export {thumbnailsRender};