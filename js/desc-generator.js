import {getRandomInteger} from './util.js';
import {createRangeIdGenerator} from './util.js';

const AVATAR_START = 1;
const AVATAR_END = 6;
const ID_START = 1;
const ID_END = 25;
const URL_START = 1;
const URL_END = 25;
const LIKES_START = 15;
const LIKES_END = 200;
const COMMENT_START = 26;
const COMMENT_END = 100;
const LIST_DESC_LENGTH = 25;
const NAMES = [
  'Карл',
  'Эрик',
  'Фрейя',
  'Элла',
  'Алис',
  'Ольга',
  'Олег',
  'Анна',
  'Юля',
  'Саша'
];

const DESCRIPTION = [
  'Никогда не позволяйте никому скучать',
  'Все только начинает становиться действительно хорошим',
  'Оставьте немного искорок, куда бы вы ни пошли',
  'Утром только одна хорошая мысль меняет смысл целого дня',
  'Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет',
  'Любите меня, от этого я буду сиять еще ярче',
  'Я точно знаю, кто я, и я чертовски горжусь этим',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон',
  'Улыбка — единственный тренд в моде, который актуален всегда',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой',
  'Моя жизнь меняется, потому что меняю ее я',
  'Всегда начинайте свой день с хороших людей и кофе',
  'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе',
  'Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них',
  'Живите во всех тех моментах, которые вы не можете выразить словами',
  'Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь',
  'Не ждите идеального момента. Берите каждый момент и делайте его идеальным',
  'Дорога к успеху строится постоянно',
  'Правило жизни: никогда не проверяйте глубину воды обеими ногами',
  'Всегда будьте лучшим вариантом себя',
  'Я не шопоголик. Я просто вношу свою лепту, чтобы помочь нашей экономике',
  'Доброе утро, всем! Теперь давайте начнем стресс!',
  'Лучшая подготовка к завтрашнему дню — это сделать все возможное сегодня',
  'Я просто прямой потомок грандиозности'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const idComment = createRangeIdGenerator(COMMENT_START,COMMENT_END);
const uniqueId = createRangeIdGenerator(ID_START,ID_END);
const uniquePhoto = createRangeIdGenerator(URL_START,URL_END);

const commentElement = () => {
  const randomAvatarIndex = getRandomInteger(AVATAR_START, AVATAR_END);
  const randomNameIndex = getRandomInteger(1, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(1, MESSAGE.length - 1);
  return {
    id: idComment(),
    avatar: `img/avatar-${ randomAvatarIndex }.svg`,
    message: MESSAGE[randomMessageIndex],
    name: NAMES[randomNameIndex]
  };
};

const descPhoto = () => {
  const randomDescIndex = getRandomInteger(1, DESCRIPTION.length - 1);
  const commentsList = Array.from({length: getRandomInteger(AVATAR_END, COMMENT_START)}, commentElement);
  return {
    id: uniqueId(),
    url: `photos/${uniquePhoto()}.jpg`,
    description: DESCRIPTION[randomDescIndex],
    likes: getRandomInteger(LIKES_START, LIKES_END),
    commentsList
  };
};

const listDesc = Array.from({length: LIST_DESC_LENGTH}, descPhoto);
export {listDesc};
