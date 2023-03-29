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
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  const quantityComments = bigPicture.querySelectorAll('.social__comment').length;
  const numberComments = quantityComments + 5;
  picture.comments.slice(0,numberComments).forEach(({avatar, name, message}) => {
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
  });
};

export {renderGallery};
