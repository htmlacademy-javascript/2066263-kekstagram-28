import { createPreviews } from './create-previews.js';
import { showAlert } from './util.js';
import './full-view.js';
import './upload-form.js';
import './effects.js';
import './scale.js';
import {getData} from './api.js';
import {renderGallery} from './gallery.js';
import {setUserFormSubmit, closeModal} from './upload-form.js';
import './photo-load.js';

getData()
  .then((pictures) => {
    createPreviews(pictures);
    renderGallery(pictures);
  })
  .catch(() => {
    showAlert('Что-то мешает показать вам все прелести! Пожалуйста, сообщите нам о проблеме');
  });


setUserFormSubmit (closeModal);
