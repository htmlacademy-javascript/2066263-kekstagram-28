const bigPicture = document.querySelector('.big-picture');
const pictureClose = document.querySelector('.big-picture__cancel');

pictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
