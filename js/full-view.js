import {isEscapeKey} from './util.js';
import {listDesc} from './desc-generator.js';

const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');
const pictureClose = document.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture');

const addThumbnailClickHandler = (thumbnail, photo) => {
  thumbnail.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    descSocial.querySelector('.social__comment-count').classList.add('hidden');
    descSocial.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
    bigPicture.querySelector('img').src = photo.url;
    bigPicture.querySelector('img').alt = photo.description;
    bigPicture.querySelector('.likes-count').textContent = photo.likes;
    bigPicture.querySelector('.social__caption').textContent = photo.description;
    bigPicture.querySelector('.comments-count').textContent = photo.commentsList.length;
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], listDesc[i]);
}

pictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

export {thumbnails};
