const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');

const showBigPicture = (picture) => {
  descSocial.querySelector('.social__comments').innerHTML = '';
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('img').alt = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
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
      numberComments += 5;
      showComments(picture, numberComments);
    }
    currentLimit += 5;
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
    showComments(picture, 5);
  });
};

export {renderGallery};
