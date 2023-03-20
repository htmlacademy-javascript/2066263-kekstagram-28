import {isEscapeKey} from './util.js';
import {listDesc} from './desc-generator.js';

const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');
const pictureClose = document.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture');

const addThumbnailClickHandler = (thumbnail, photo) => {
  thumbnail.addEventListener('click', () => {
    descSocial.querySelector('.social__comments').innerHTML = '';
    bigPicture.classList.remove('hidden');
    descSocial.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
    bigPicture.querySelector('img').src = photo.url;
    bigPicture.querySelector('img').alt = photo.description;
    bigPicture.querySelector('.likes-count').textContent = photo.likes;
    bigPicture.querySelector('.social__caption').textContent = photo.description;
    bigPicture.querySelector('.comments-count').textContent = photo.commentsList.length;
    photo.commentsList.forEach(({avatar, name, message}) => {
      const comment = document.createElement('li');
      comment.classList.add('social__comment');
      comment.innerHTML = '<img><p>';
      comment.querySelector('img').classList.add('social__picture');
      comment.querySelector('img').src = avatar;
      comment.querySelector('img').alt = name;
      comment.querySelector('p').textContent = message;
      comment.querySelector('p').classList.add('social__text');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(comment);
      descSocial.querySelector('.social__comments').append(fragment);
    });
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], listDesc[i]);
}

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
