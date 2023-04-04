import './full-view.js';
import './upload-form.js';
import './effects.js';
import './scale.js';
import './photo-load.js';
import { createPreviews } from './create-previews.js';
import { showAlert, debounce } from './util.js';
import {getData} from './api.js';
import {renderGallery} from './gallery.js';
import {closeModal, setUserFormSubmit} from './upload-form.js';
import {filter, getFilteredPictures} from './filter.js';

try {
  const data = await getData();
  const debouncedCreatePreviews = debounce(createPreviews);
  filter(data, debouncedCreatePreviews);
  createPreviews(getFilteredPictures());
  renderGallery(data);
} catch {
  showAlert('Что-то мешает показать вам все прелести! Пожалуйста, проверьте Интернет-соединение или сообщите нам о проблеме');
}

setUserFormSubmit(closeModal);
