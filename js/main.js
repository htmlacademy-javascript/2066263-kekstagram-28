import { createPreviews } from './create-previews.js';
import { showAlert } from './util.js';
import './full-view.js';
import './upload-form.js';
import './effects.js';
import './scale.js';
import {getData} from './api.js';

getData()
  .then((pictures) => {
    createPreviews(pictures);
  })
  .catch(() => {
    showAlert('Что-то мешает показать вам все прелести! Пожалуйста, сообщите нам о проблеме');
  });

const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');
const pictureClose = document.querySelector('.big-picture__cancel');
const picturesList = document.querySelector('.pictures');
const thumbnails = picturesList.querySelectorAll('.picture');

const addThumbnailClickHandler = (thumbnail) => {
  thumbnail.addEventListener('click', () => {
    descSocial.querySelector('.social__comments').innerHTML = '';
    bigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    bigPicture.querySelector('img').src = thumbnail.url;
    bigPicture.querySelector('img').alt = thumbnail.description;
    bigPicture.querySelector('.likes-count').textContent = thumbnail.likes;
    bigPicture.querySelector('.social__caption').textContent = thumbnail.description;
    bigPicture.querySelector('.comments-count').textContent = thumbnail.commentsList.length;
    const quantityComments = bigPicture.querySelectorAll('.social__comment').length;
    const numberComments = quantityComments + 5;
    thumbnail.comments.slice(0,numberComments).forEach(({avatar, name, message}) => {
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
  addThumbnailClickHandler(thumbnails[i]);
}
