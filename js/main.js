import { createPreviews } from './create-previews.js';
import './full-view.js';
import './upload-form.js';
import './effects.js';
import './scale.js';

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((Response)=> Response.json())
  .then((pictures) => {
    createPreviews(pictures);
  });
