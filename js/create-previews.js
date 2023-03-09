import {listDesc} from './desc-generator.js';
const pucture = document.querySelector('#picture');

const previewsDescList = listDesc();
const previewsListFragment = document.querySelector('.pictures');

previewsDescList.forEach(({url, likes}) => {
  const previewElement = pucture.cloneNode(true);
  previewElement.querySelector('.picture__img').src = url;
  previewElement.querySelector('.picture__likes').textContent = likes;
  previewsListFragment.appendChild(previewElement);
});

// Как теперь это увидеть??
