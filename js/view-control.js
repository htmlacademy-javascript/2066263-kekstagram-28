import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const pictureClose = document.querySelector('.big-picture__cancel');

pictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
