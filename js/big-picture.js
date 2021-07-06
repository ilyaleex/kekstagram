/* eslint-disable no-undef */
import {thumbnailsRender} from './thumbnails.js';

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const currentCommentsCount = bigPicture.querySelector('.current-comments-count');
const postComments = bigPicture.querySelector('.social__comments');
const postDescription = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const pictures = document.querySelectorAll('.picture');
const commentFragment = document.createDocumentFragment();

const commentInput = bigPicture.querySelector('.social__footer-text');
const uploadFile = document.querySelector('#upload-file');

const onCloseButtonClick = () => {
  UploadForm.classList.add('hidden');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
};

const addPhotoListClickHandler = (post, {url, likes, comments, description}) => {
  const onPictureClick = () => {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPictureImg.img.src = url;
    likesCount.textContent = likes;
    commentsCount.textContent = comments.length;
    postDescription.textContent = description;

    postComments.innerHTML = '';

    const addComments = (photoComments) => {
      photoComments.forEach(({avatar, name, message}) => {
        const author = document.createElement('li');
        const authorImg = document.createElement('img');
        const authorComment = document.createElement('p');

        author.classList.add('social__comment');
        authorImg.classList.add('social__picture');
        authorComment.classList.add('social__text');
        authorImg.src = avatar;
        authorImg.alt = name;
        authorImg.width = 35;
        authorImg.height = 35;


        authorComment.textContent = message;
        author.appendChild(authorImg);
        author.appendChild(authorComment);
        commentFragment.appendChild(author);
      });

      postComments.appendChild(commentFragment);
    };
    let commentsCounter = 0;
    let commentsCounterIndex = COMMENTS_STEP;

    const slicedComments = comments.slice(commentsCounter, commentsCounterIndex);
    addComments(slicedComments);

    commentsLoader.addEventListener('click', () => {
      commentsCounter += COMMENTS_STEP;
      commentsCounterIndex += COMMENTS_STEP;

      const slicedAdditionalComments = comments.slice(commentsCounter, commentsCounterIndex);
      addComments(slicedAdditionalComments);

      currentCommentsCount.textContent = postComments.children.length;

      if (comments.length === postComments.children.length) {
        commentsLoader.classList.add('hidden');
      }
    });

    if (comments.length > COMMENTS_STEP) {
      socialCommentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');

      currentCommentsCount.textContent = COMMENTS_STEP;
    } else {
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }

    bigPictureCancel.addEventListener('click', onCloseButtonClick);
  };

  bigPictureCancel.removeEventListener('click', onCloseButtonClick);
  post.addEventListener('click', onPictureClick);
};

// eslint-disable-next-line id-length
pictures.forEach((photo, i) => {
  addPhotoListClickHandler(photo, thumbnailsRender[i]);
});
