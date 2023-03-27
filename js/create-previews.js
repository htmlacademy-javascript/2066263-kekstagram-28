const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPreviews = (data) => {
  data.forEach(({id, likes, url, description, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    picturesList.appendChild(pictureElement);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
  });
};

export{createPreviews};
