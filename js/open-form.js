import {isEscapeKey} from './util.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';

const HASHTAGS_MAX_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'начните с решетки, не более 5 тегов без спецсимволов, пожалуйста';

const formImgUpload = document.querySelector('.img-upload__form');
const uploadControl = document.querySelector('.img-upload__start');
const uploadPicture = document.querySelector('.img-upload__overlay');
const uploadCansel = document.querySelector('.img-upload__cancel');
const fieldHashtage = uploadPicture.querySelector('.text__hashtags');
const fieldComment = uploadPicture.querySelector('.text__description');

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
  uploadPicture.reset();
  pristine.reset();
  formImgUpload.reset();
};

uploadCansel.addEventListener('click', () => {
  closeModal();
});

const isFieldFocused = () => document.activeElement === fieldHashtage || document.activeElement === fieldComment;

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
});

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

formImgUpload.addEventListener('submit', onFormSubmit);
