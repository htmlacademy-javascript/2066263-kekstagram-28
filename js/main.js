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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRangeIdGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return 1000;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const uniqueIndex = createRangeIdGenerator(1,25);

const descPhoto = () => {
  const randomDescIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);
  return {
    id: createRangeIdGenerator(1,25),
    url: `photos/${uniqueIndex}.jpg`,
    description: DESCRIPTION[randomDescIndex],
    likes: getRandomInteger(15, 2000),
    comments: {
      id: createRangeIdGenerator(1,25),
      avatar: `img/avatar-${ randomAvatarIndex }.svg`,
      message: MESSAGE[randomMessageIndex],
      name: NAMES[randomNameIndex]
    },
  };
};

const listPhoto = Array.from({length: 25}, descPhoto);// При запуске в объектах, содержащих createRangeIdGenerator отображается вся функция, а не результат ее работы
const list = Array.from({length: 25}, createRangeIdGenerator(1,25)); // Показывает что  createRangeIdGenerator способна сделать массив из неповторяющихся чисел
