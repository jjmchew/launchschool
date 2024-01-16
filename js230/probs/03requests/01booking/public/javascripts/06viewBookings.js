// #region helper functions
let sendRequest = function(url) {
  return new Promise(res => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';

    request.addEventListener('load', () => {
      res(request.response);
    })

    request.send();
  });
};

export async function getBookings() {
  return await sendRequest('/api/bookings');
}

async function getBookingDetail(date) {
  return await sendRequest('/api/bookings/' + date);
}

function displayDetails(details, liElement) {
  let newUl = document.createElement('ul');
  details.forEach(line => {
    let newLi = document.createElement('li');
    newLi.classList.add('noPointer');
    newLi.textContent = line;
    newUl.appendChild(newLi);
  });
  liElement.appendChild(newUl);
}

function removeLoading() {
  let loading = document.querySelector('#ex6loading');
  loading.remove();
}

function setupUl(data) {
  removeLoading();
  let ul = document.createElement('ul');

  // add booking date li's
  data.forEach(date => {
    let li = document.createElement('li');
    li.textContent = date;
    ul.appendChild(li);
  });

  // add click event listener
  ul.addEventListener('click', event => {
    let date = event.target.textContent;
    if (!event.target.classList.contains('noPointer') &&
        !date.includes('|')) {

      // get and display booking date details
      getBookingDetail(date)
        .then(ary => {
          let details = ary.map(subary => {
            return subary.join(' | ');
          });
          details.sort();
          displayDetails(details, event.target);
        });

      }
  });

  // add booking date ul
  let ex6 = document.querySelector('#ex6');
  if (ex6) ex6.appendChild(ul);
}
// #endregion

export default function ex6() {
  console.log('Exercise 6 - Viewing Bookings');

  getBookings().then(data => {
    data.sort();
    setupUl(data);
  });
}

