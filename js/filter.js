import {thumbnailsRender} from './thumbnails.js';
import {addPostsComments} from './big-picture.js';
import {shuffle, sortByField} from './util.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_LENGTH = 10;

const picturesContainer = document.querySelector('.pictures');
const imageFilter = document.querySelector('.img-filters');
const imageFilterButtons = imageFilter.querySelectorAll('.img-filters__button');
const imageFilterDefault = imageFilter.querySelector('#filter-default');
const imageFilterRandom = imageFilter.querySelector('#filter-random');
const imageFilterDiscussed = imageFilter.querySelector('#filter-discussed');

const applyImageFilter = (filterButton) => {
  imageFilterButtons.forEach((imageFilterButton) => {
    imageFilterButton.classList.remove('img-filters__button--active');
  });
  filterButton.classList.add('img-filters__button--active');
};

const renderFilteredPhotoList = (debounce(
  (photoList) => {
    const pictures = picturesContainer.querySelectorAll('.picture');

    pictures.forEach((picture) => {
      picture.remove();
    });

    thumbnailsRender(photoList);
    addPostsComments(photoList);
  },
  RERENDER_DELAY,
));

const renderPhotoFilter = (userPhotos) => {
  imageFilterDefault.addEventListener('click', () => {
    applyImageFilter(imageFilterDefault);
    const defaultOrderPhotos = userPhotos.sort(sortByField('id'));

    renderFilteredPhotoList(defaultOrderPhotos);
  });

  imageFilterRandom.addEventListener('click', () => {
    applyImageFilter(imageFilterRandom);

    shuffle(userPhotos);
    const slicedRandomPhotos = userPhotos.slice(0, RANDOM_PHOTOS_LENGTH);

    renderFilteredPhotoList(slicedRandomPhotos);
  });

  imageFilterDiscussed.addEventListener('click', () => {
    applyImageFilter(imageFilterDiscussed);
    const disscusedOrderPhotosReverse = userPhotos.sort(sortByField('comments'));
    const disscusedOrderPhotos = disscusedOrderPhotosReverse.reverse();

    renderFilteredPhotoList(disscusedOrderPhotos);
  });
};

export {renderPhotoFilter, imageFilter};
