/* eslint-disable eol-last */
/* eslint-disable id-length */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

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

const comments = new Array(getRandomElement(1, 20)).fill(null).map(() => createComment());

function getRandomElement(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const author = (id) => {
  return {
    id: id,
    avatar: `img/avatar-${getRandomElement(1, 6)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const posts = [];

const photoDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Новая фотография',
    likes: getRandomElement(15, 200),
    comments: comments,
  };
};

for (let i = 1; i <= 25; i++) {
  posts.push(photoDescription());
}

export {posts};