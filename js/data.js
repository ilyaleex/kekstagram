/* eslint-disable id-length */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const AVATARS = [`img/avatar-${getRandomArrayElement(1, 6)}.svg`];
const IMAGES = [`photos/${getRandomArrayElement(1, 25)}.jpg`];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Денис',
  'Мага',
  'Артемий',
  'Антон',
  'Alex',
  'Рамзан',
  'James',
  'Евгений',
  'Стефан',
];

function getRandomArrayElement(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomComments(min) {
  Math.floor(Math.random() * max);
}

const author = () => {
  return {
    id: getRandomArrayElement(1, 5366),
    avatar: AVATARS,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const posts = [];

const photoDescription = () => {
  return {
    id: getRandomArrayElement(1, 25),
    url: IMAGES,
    description: 'Новая фотография',
    likes: getRandomArrayElement(15, 200),
    comments: getRandomComments(author(26)),
  };
};

for (let i = 1; i <= 25; i++) {
  posts.push(photoDescription());
}
