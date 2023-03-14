import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const pictureClose = document.querySelector('.big-picture__cancel');

const onClickPic = ('click', (evt) => {
  bigPicture.classList.remove('hidden');
  const picDesc = evt.target.parentNode;
  bigPicture.querySelector('img').src = evt.target.src;
  bigPicture.querySelector('.likes-count').textContent = picDesc.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.comments-count').textContent = picDesc.querySelector('.picture__comments').textContent;
});

pictures.addEventListener('click', onClickPic);

pictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

// const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

//     Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

//     Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

//     Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

