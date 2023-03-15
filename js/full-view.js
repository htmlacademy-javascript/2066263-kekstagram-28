import {isEscapeKey} from './util.js';
import {listDesc} from './desc-generator.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const descSocial = document.querySelector('.big-picture__social');

const pictureClose = document.querySelector('.big-picture__cancel');

const onClickPic = (evt) => {
  bigPicture.classList.remove('hidden');
  const picDesc = evt.target.parentNode;
  bigPicture.querySelector('img').src = evt.target.src;
  bigPicture.querySelector('.likes-count').textContent = picDesc.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.comments-count').textContent = picDesc.querySelector('.picture__comments').textContent;
  const search = evt.target.src;
  descSocial.querySelector('.social__caption').textContent = listDesc.find((Object) => Object.url === search).description;//не понимаю, почему не работает поиск по массиву
};

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
//   Описание фотографии description вставьте строкой в блок .social__caption

