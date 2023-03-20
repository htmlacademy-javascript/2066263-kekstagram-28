
const renderListComments = () => {
  photo.commentsList.forEach(({avatar, name, message}) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    comment.innerHTML = '<img><p>';
    comment.querySelector('img').classList.add('social__picture');
    comment.querySelector('img').src = avatar;
    comment.querySelector('img').alt = name;
    comment.querySelector('p').textContent = message;
    comment.querySelector('p').classList.add('social__text');
    const fragment = document.createDocumentFragment();
    fragment.appendChild(comment);
    descSocial.querySelector('.social__comments').append(fragment);
  });
};

export {renderListComments};
