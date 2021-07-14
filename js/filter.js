import {thumbnailsRender} from './thumbnails.js';
import {addPostsComments} from './big-picture.js';
import {shuffle, sortByField} from './util.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_LENGTH = 10;

const picturesContainer = document.querySelector('.pictures');
const imgFilter = document.querySelector('.img-filters');
const imgFilterButtons = imgFilter.querySelectorAll('.img-filters__button');
const imgFilterDefault = imgFilter.querySelector('#filter-default');
const imgFilterRandom = imgFilter.querySelector('#filter-random');
const imgFilterDiscussed = imgFilter.querySelector('#filter-discussed');


// function deactivateButtons() {
//   Array.from(filterButtons).forEach((button) => {
//     button.classList.remove('img-filters__button--active');
//   });
// }

// function activateButton (button) {
//   button.classList.add('img-filters__button--active');
// }


const applyFilterImages = (filterButton) => {
  Array.from(imgFilterButtons).forEach((imgFilterButton) => {
    imgFilterButton.classList.remove('img-filters__button--active');
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
  imgFilterDefault.addEventListener('click', () => {
    applyFilterImages(imgFilterDefault);
    const defaultOrderPhotos = userPhotos.sort(sortByField('id'));

    renderFilteredPhotoList(defaultOrderPhotos);
  });

  imgFilterRandom.addEventListener('click', () => {
    applyFilterImages(imgFilterRandom);

    shuffle(userPhotos);
    const slicedRandomPhotos = userPhotos.slice(0, RANDOM_PHOTOS_LENGTH);

    renderFilteredPhotoList(slicedRandomPhotos);
  });

  imgFilterDiscussed.addEventListener('click', () => {
    applyFilterImages(imgFilterDiscussed);
    const disscusedOrderPhotosReverce = userPhotos.sort(sortByField('comments'));
    const disscusedOrderPhotos = disscusedOrderPhotosReverce.reverse();

    renderFilteredPhotoList(disscusedOrderPhotos);
  });
};

export {renderPhotoFilter, imgFilter};
