import { createPreviews } from './create-previews.js';
import { showAlert, debounce } from './util.js';
import './full-view.js';
import './upload-form.js';
import { showMessage } from './upload-form.js';
import './effects.js';
import './scale.js';
import {getData, sendData} from './api.js';
import {renderGallery} from './gallery.js';
import {setUserFormSubmit, closeModal} from './upload-form.js';
import './photo-load.js';
import {filter, getFilteredPictures} from './filter.js';

try {
  const data = await getData();
  const debouncedCreatePreviews = debounce(createPreviews);
  filter(data, debouncedCreatePreviews);
  createPreviews(getFilteredPictures());
  renderGallery(data);
} catch {
  showAlert('Что-то мешает показать вам все прелести! Пожалуйста, сообщите нам о проблеме');
}

setUserFormSubmit (closeModal);
