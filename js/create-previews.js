import {listDesc} from './desc-generator.js';

const pucturesList = document.querySelector('.pictures');
const puctureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const descList = listDesc;
descList.forEach(({likes, url, commentsList}) => {
  const puctureElement = puctureTemplate.cloneNode(true);
  pucturesList.appendChild(puctureElement);
  puctureElement.querySelector('.picture__likes').textContent = likes;
  puctureElement.querySelector('.picture__img').src = url;
  puctureElement.querySelector('.picture__comments').textContent = commentsList.length;
});


// const previewsDescList = listDesc();
// const previewsListFragment = document.querySelector('.picture');

// previewsDescList.forEach(({url, likes}) => {
//   const previewElement = previewsListFragment.cloneNode(true);
//   previewElement.querySelector('.picture__img').src = url;
//   previewElement.querySelector('.picture__likes').textContent = likes;
//   puctures.appendChild(previewElement);
// });

