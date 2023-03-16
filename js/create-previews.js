import {listDesc} from './desc-generator.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

listDesc.forEach(({likes, url, description, commentsList}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  picturesList.appendChild(pictureElement);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = commentsList.length;
});
