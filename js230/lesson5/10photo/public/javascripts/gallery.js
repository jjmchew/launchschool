console.log('gallery');

let fetchJson = async function(url, options) {
  return await fetch(url, options).then(response => response.json());
};

let getPhotos = fetchJson('/photos', {method: 'GET'});

document.addEventListener('DOMContentLoaded', () => {
  // #region define/store DOM elements
  const slidesEl = document.querySelector('#slides');
  const headerEl = document.querySelector('section > header');
  const commentsUlEl = document.querySelector('#comments ul');
  const slideshowUlEl = document.querySelector('#slideshow ul');
  const commentFormEl = document.querySelector('section form');
  // #endregion

  // #region setup handlebars templates
  const photoTemplate = Handlebars.compile(document.querySelector('#photos').innerHTML);
  const photoInfoTemplate = Handlebars.compile(document.querySelector('#photo_information').innerHTML);
  const commentsTemplate = Handlebars.compile(document.querySelector('#photo_comments').innerHTML);
  Handlebars.registerPartial('comment', document.querySelector('#photo_comment').innerHTML);
  // #endregion

  // #region helper function definitions
  let showComments = function(photoId) {
    fetchJson(`/comments?photo_id=${String(photoId)}`)
    .then(data => {
      commentsUlEl.innerHTML = commentsTemplate({comments: data});
    });
  };

  let populateInfo = function(photoInfo) {
    headerEl.innerHTML = photoInfoTemplate(photoInfo);
    let actionsEl = document.querySelector('div.actions');
    actionsEl.addEventListener('click', e => {
      e.preventDefault();
      console.log(e.target.getAttribute('href'), e.target.getAttribute('data-id'));
      handleButtonActions(e.target.getAttribute('href'), e.target.getAttribute('data-id'))
        .then(data => {
          let content = e.target.textContent;
          e.target.textContent = content.replace(/\d+/, String(data.total));
        });
    });
  };

  let showPhoto = function(photoId) {
    let photoEls = document.querySelectorAll('#slides figure');
    photoEls.forEach(photo => {
      if (photo.className.includes('show')) photo.classList.remove('show');
    });

    let photoEl = document.querySelector(`#slides figure[data-id="${String(photoId)}"]`);
    photoEl.classList.toggle('show');
  };

  let getPhotosIdx = function(photoId) {
    let idx;
    photos.forEach((photo, index) => {
      if (photo.id === photoId) idx = index;
    });
    return idx;
  };

  let displayPhoto = function(photoId) {
    let idx = getPhotosIdx(photoId);
    populateInfo({...photos[idx]});
    showComments(photoId);
    showPhoto(photoId);

    let idEl = commentFormEl.querySelector('input[name="photo_id"]');
    idEl.setAttribute('value', photoId);
  };

  let handleButtonActions = function(url, photoId) {
    console.log(url, photoId);
    return fetch(url, {
      method: 'post',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({photo_id: photoId})
    })
      .then(response => response.json());
  };
  // #endregion

  // populate photos
  let currentPhotoId;
  let photos;

  getPhotos.then(data => {
    photos = data;
    slidesEl.innerHTML = photoTemplate({photos: data});

    // populate first photo info
    currentPhotoId = data[0].id;
    displayPhoto(currentPhotoId);
  });

  slideshowUlEl.addEventListener('click', e => {
    e.preventDefault();
    switch(e.target.className) {
      case 'prev':
          if (getPhotosIdx(currentPhotoId) === 0) currentPhotoId = photos[photos.length - 1].id;
          else currentPhotoId -= 1;
        break;
      case 'next':
        if (getPhotosIdx(currentPhotoId) === photos.length - 1) currentPhotoId = photos[0].id;
        else currentPhotoId += 1;
        break;
    }

    displayPhoto(currentPhotoId);
  });

  commentFormEl.addEventListener('submit', e => {
    e.preventDefault();

    let inputs = commentFormEl.querySelectorAll('input');
    let keysAndValues = [];
    inputs.forEach(element => {
      if (element.getAttribute('type') !== 'submit') {
        let key = encodeURIComponent(element.name);
        let value = encodeURIComponent(element.value);
        keysAndValues.push(`${key}=${value}`);
      }
    });
    let textarea = commentFormEl.querySelector('textarea');
    keysAndValues.push(`${encodeURIComponent(textarea.name)}=${encodeURIComponent(textarea.value)}`);

    let data = keysAndValues.join('&');

    fetch(commentFormEl.getAttribute('action'), {
      method: 'post',
      headers: new Headers({
        "Content-Type": 'application/x-www-form-urlencoded; charset=utf-8',
      }),
      body: data,
    })
      .then(response => response.json())
      .then(()=> showComments(currentPhotoId));

    commentFormEl.reset();
  });
});