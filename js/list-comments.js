import {listDesc} from './desc-generator.js';

const commentsPhoto = document.querySelector('.social__comments');
const commentTemplate = commentsPhoto.querySelector('.social__comment');

for (let i = 0; i < listDesc.length; i++) {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = listDesc[i].commentsList[i].avatar;
  commentElement.querySelector('.social__picture').alt = listDesc[i].commentsList[i].name;
  commentElement.querySelector('.social__text').textContent = listDesc[i].commentsList[i].message;
  commentsPhoto.append(commentElement);
}
