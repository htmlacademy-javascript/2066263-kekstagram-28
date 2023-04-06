import {isEscapeKey} from './util.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';
import {sendData} from './api.js';

const HASHTAGS_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'начните с решетки, не более 5 тегов без спецсимволов, пожалуйста';

const formImgUpload = document.querySelector('.img-upload__form');
const uploadControl = formImgUpload.querySelector('.img-upload__start');
const uploadPicture = formImgUpload.querySelector('.img-upload__overlay');
const uploadCansel = formImgUpload.querySelector('.img-upload__cancel');
const fieldHashtage = uploadPicture.querySelector('.text__hashtags');
const fieldComment = uploadPicture.querySelector('.text__description');
const uploadButton = uploadPicture.querySelector('.img-upload__submit');
const sendSuccess = document.querySelector('#success').content.querySelector('.success');
const sendError = document.querySelector('#error').content.querySelector('.error');
const sendProcess = document.querySelector('#messages').content.querySelector('.img-upload__message--loading');

const pristine = new Pristine(formImgUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= HASHTAGS_MAX_COUNT;
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  fieldHashtage,
  validateTags,
  TAG_ERROR_TEXT
);

const openModal = () => {
  uploadPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

uploadControl.addEventListener('change', () => {
  openModal();
});

const closeModal = () => {
  uploadPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  resetEffects();
  resetScale();
  pristine.reset();
  formImgUpload.reset();
};

uploadCansel.addEventListener('click', () => {
  closeModal();
});

const isFieldFocused = () => document.activeElement === fieldHashtage || document.activeElement === fieldComment;

const showMessage = (message) => {
  const messageElement = message.cloneNode(true);
  document.body.appendChild(messageElement);
  messageElement.classList.add('message');
  uploadButton.addEventListener('click', (evt) => {
    if (evt.target.matches('.message')) {
      document.querySelectorAll('.message').forEach((element) => element.remove());
    }
  });

  if (messageElement.contains(messageElement.querySelector('button'))) {
    messageElement.querySelector('button').addEventListener('click', () => {
      document.querySelectorAll('.message').forEach((e) => e.remove());
    });
  }
};

const blockUploadButton = () => {
  uploadButton.disabled = true;
  showMessage(sendProcess);
};

const unblockUploadButton = () => {
  uploadButton.disabled = false;
  document.querySelectorAll('.message').forEach((e) => e.remove());
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
});


const setUserFormSubmit = (onSuccess) => {
  formImgUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockUploadButton();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(new FormData(evt.target))
        .then((Response) => {
          if (Response.ok) {
            onSuccess();
            showMessage(sendSuccess);
            closeModal();
          }
        })
        .catch(() => {
          showMessage(sendError);
          openModal();
        })
        .finally(unblockUploadButton());
    }
    // else {
    //   showMessage(sendError);

    //   unblockUploadButton();
    // }
  });
};

export {setUserFormSubmit, closeModal};
