import {imgFilter} from './filter.js';

const thumbnail = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const thumbnailsRender = (posts) => {
  const picturesFragment = document.createDocumentFragment();
  posts.forEach(({url, likes, comments}) => {
    const pictureElement = thumbnail.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });
  pictures.appendChild(picturesFragment);
  imgFilter.classList.remove('img-filters--inactive');
};

export {thumbnailsRender, pictures};
