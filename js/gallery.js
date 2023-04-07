import {isEscapeKey} from './util.js';

const NUMBER_OF_COMMENTS = 5;

const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');
const pictureClose = document.querySelector('.big-picture__cancel');

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};

const showBigPicture = (picture) => {
  descSocial.querySelector('.social__comments').innerHTML = '';
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('img').alt = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  document.addEventListener('keydown', (onBigPictureEscKeydown));
  pictureClose.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', (onBigPictureEscKeydown));
  });
};

const showCount = (picture) => {
  descSocial.querySelector('.social__comment-count').textContent =
  `${descSocial.querySelectorAll('.social__comment').length} из ${picture.comments.length} комментариев`;
};

const showComments = (picture, numberComments) => {
  picture.comments.slice(0, numberComments).forEach(({avatar, name, message}) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    comment.innerHTML = '<img><p>';
    comment.querySelector('img').classList.add('social__picture');
    comment.querySelector('img').src = avatar;
    comment.querySelector('img').alt = name;
    comment.querySelector('p').textContent = message;
    comment.querySelector('p').classList.add('social__text');
    const fragment = document.createDocumentFragment();
    fragment.append(comment);
    descSocial.querySelector('.social__comments').append(fragment);
    if (descSocial.querySelectorAll('.social__comment').length >= picture.comments.length) {
      bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      bigPicture.querySelector('.social__comments-loader').classList.remove('hidden');
    }
    showCount(picture);
  });

  bigPicture.querySelector('.social__comments-loader').addEventListener ('click', () => {
    let currentIndex = 0;
    let currentLimit = 1;
    currentLimit += currentIndex;
    for (currentIndex; currentIndex < currentLimit && currentIndex < picture.comments.length; currentIndex++) {
      descSocial.querySelector('.social__comments').innerHTML = '';
      numberComments += NUMBER_OF_COMMENTS;
      showComments(picture, numberComments);
    }
    currentLimit += NUMBER_OF_COMMENTS;
  });
};

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
    showComments(picture, NUMBER_OF_COMMENTS);
  });
};

export {renderGallery};
