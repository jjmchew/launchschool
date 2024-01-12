document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');
  
  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products'); // API provided by LS

  request.addEventListener(
    'loadend', 
    (event) => store.innerHTML = request.response // response contains HTML
  );
  
  request.send();

  // Need to manually manage click on each product to ensure the correct HTTP request is sent
  // i.e., to the correct domain / path (the HTML links in the response only contain the path, not the domain)

  store.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName !== "A") {
      return;
    }

    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://ls-230-web-store-demo.herokuapp.com" + target.getAttribute("href")
    );

    request.addEventListener("load", event => (store.innerHTML = request.response));
    request.send();
  });

  store.addEventListener('submit', event => {
    event.preventDefault();

    // let form = store.querySelector('form');
    let form = event.target;  // LS solution - cleaner - since event can only occur on a form
    let data = new FormData(form);

    let request = new XMLHttpRequest();
    request.open(
      form.method,
      'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action')
    );

    request.setRequestHeader('Authorization', 'token AUTH_TOKEN'); // LS API was configured to look for this header

    request.addEventListener('load', ()=> {
      store.innerHTML = request.response;
    });

    request.send(data);
  });
});

/*
Problem 1
- when editing a product, the form submission doesn't work since by default the form is submitted to the same domain (wsl.localhost in my case) and the API path does not exist there
- assume that - similar to the example with clicking on each product, the HTTP request is submitted by default to the wrong domain

*/