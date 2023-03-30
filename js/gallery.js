const container = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const descSocial = document.querySelector('.big-picture__social');
let NUMBER_COMMENTS = 5;

const showBigPicture = (picture) => {
  descSocial.querySelector('.social__comments').innerHTML = '';
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('img').alt = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
};

const showComments = (picture) => {
  let currentIndex = 1;
  let currentLimit = NUMBER_COMMENTS;
  picture.comments.slice(currentIndex, currentLimit).forEach(({avatar, name, message}) => {
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

  function showArray() {
    currentLimit += currentIndex;
    for (currentIndex; currentIndex < currentLimit && currentIndex < picture.comments.length; currentIndex++) {
      NUMBER_COMMENTS = currentIndex;
    }
  }

  bigPicture.querySelector('.social__comments-loader').addEventListener ('click', () => {
    showArray();
    showComments(picture);
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
    showComments(picture);
  });
};

export {renderGallery};
