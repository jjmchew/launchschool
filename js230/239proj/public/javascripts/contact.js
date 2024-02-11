console.log('contacts');

const ContactsApp = function () {

  class Model {
    #contacts = [];

    constructor() {
    }

    contacts() {
      return this.#contacts;
    }
  
    add({full_name, email, phone_number, tags}) {
      return new Promise((res, rej) => {

        this.#apiSend({
          method: 'POST',
          url: '/api/contacts',
          responseType: 'json',
          status: 201,
          data: {
            full_name: full_name,
            email: email,
            phone_number: phone_number,
            tags: tags,
          },
          contentType: 'application/json; charset=utf-8',
        })
        .then(contact => {
          console.log('added ', contact);
          this.#contacts.push(contact);
          res(contact);
        })
        .catch(err => {
          console.error(err);
          rej(err);
        });

      });
    }

    update({full_name, email, phone_number, tags}, id) {
      return new Promise((res, rej) => {

        this.#apiSend({
          method: 'PUT',
          url: `/api/contacts/${String(id)}`,
          responseType: 'json',
          status: 201,
          data: {
            full_name: full_name,
            email: email,
            phone_number: phone_number,
            tags: tags,
          },
          contentType: 'application/json; charset=utf-8',
        })
        .then(contact => {
          console.log('updated ', id, contact);
          // this.#contacts.push(contact);
          res(contact);
        })
        .catch(err => {
          console.error(err);
          rej(err);
        });

      });
    }

    delete(id) {
      this.#apiSend({
        method: 'DELETE',
        url: `/api/contacts/${String(id)}`,
        responseType: null,
        status: 204,
      })
      .then(() => {
        this.#dataDelete(id);
      })
      .catch(console.error);
    }

    async getContacts() {
      try {
        // let data = await this.#apiGet('/api/contacts');
        let data = await this.#apiSend({
          method: 'GET',
          url: '/api/contacts',
          responseType: 'json',
          status: 200
        });
        this.#contacts = data;
        return new Promise(res => res(data));
      } catch (err) {
        console.log(err);
        return null;
      }
    }

    // private methods
    #apiSend({method, url, responseType, status, data, contentType}) {
      return new Promise((res, rej) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        if (responseType) request.responseType = 'json';
        if (contentType) request.setRequestHeader('Content-Type', contentType);
        if (data) request.send(JSON.stringify(data));
        else request.send();

        request.addEventListener('load', () => {
          if (request.status === status) res(request.response);
          else rej(new Error('API Error'));
        });
      });
    }

    #getIdx(id) {
      return this.#contacts.findIndex(obj => obj.id === id);
    }

    #dataUpdate(id, data) {
      let idx = this.#getIdx(id);
      for (const key in data) {
        this.#contacts[idx][key] = data[key];
      }
      console.log('data updated', id, data);
    }

    #dataDelete(id) {
      let idx = this.#getIdx(id);
      this.#contacts.splice(idx, 1);
      console.log(this.#contacts);
    }
  }

  class View {
    #templates;
    #section;
    #create;
    #edit;
    #list;
    #screen;

    constructor() {
      this.#section = this.#getElement('section#cards');
      this.#create = this.#getElement('#create');
      this.#edit = this.#getElement('#edit');
      this.#list = this.#getElement('#list');
      this.#screen = [this.#list, this.#edit, this.#create];
      this.#prepHandlebars();
    }

    // public methods
    removeAllCards() {
      let node = this.#section.firstElementChild;
      let nextNode;
      while (node) {
        nextNode = node.nextElementSibling;
        node.remove();
        node = nextNode;
      }
    }

    displayCards(contacts) {
      if (contacts.length === 0) {
        this.displayNoContacts();
        return;
      }

      contacts.forEach(contact => {
        const tmp = document.createElement('div');
        tmp.innerHTML = this.#templates['cardTemplate'](contact);
        this.#section.appendChild(tmp.firstElementChild);
      });
    }

    deleteCard(id) {
      const card = document.querySelector(`#cards #card-${String(id)}`);
      card.remove();
    }

    showCreate() {
      this.#show(this.#create);
    }

    showEdit(info) {
      this.#show(this.#edit);

      document.querySelector('#edit #name').value = info.name;
      document.querySelector('#edit #email').value = info.email;
      document.querySelector('#edit #phone').value = info.phone;
    }

    showList() {
      this.#show(this.#list);
    }

    displayNoContacts() {
      const msg = document.createElement('div');
      msg.classList.add('message');
      msg.appendChild(document.createTextNode('There are no contacts'));
      this.#section.appendChild(msg);
    }

    // private methods
    #show(element) {
      this.#screen.forEach(screen => {
        let toggle = false;
        if (screen === element) toggle = true;
        this.#toggleShow(screen, toggle);
      });
    }

    #getElement(selector) {
      return document.querySelector(selector);
    }

    #toggleShow(element, show) {
      if (show) element.classList.remove('hide');
      else element.classList.add('hide');
    }
  
    #prepHandlebars() {
      // templates
      this.#templates = {};
      const tmps = document.querySelectorAll('script[type="text/x-handlebars"]');
      tmps.forEach(tmp => {
        this.#templates[tmp['id']] = Handlebars.compile(tmp['innerHTML']);
      });

      // partials
      document.querySelectorAll('[data-type=partial]').forEach(tmp => {
        Handlebars.registerPartial(tmp['id'], tmp['innerHTML']);
      });

      // helpers
      Handlebars.registerHelper('tagLinks', function(tagString) {
        if (tagString === null || tagString === '') return '<p class="noTags">No tags</p>';

        let html = '';
        tagString.split(',').forEach(tag => {
          html += `<div class='tag'>${tag}</div>`;
        })
        return html;
      });

    }

  }

  class Controller {
    #model;
    #view;
    #cards;
    #form;

    constructor(model, view) {
      this.#model = model;
      this.#view = view;

      this.#init();
    }

    #init() {
      this.#cards = document.querySelector('#cards');
      this.#form = document.querySelector('#create form');
      this.#displayCards();
      this.#addEventListeners();
    }

    #isButton(target) {
      return target.className.includes('button');
    }

    #addEventListeners() {
      // for create and edit
      [
        document.querySelector('#create'),
        document.querySelector('#edit'),
      ]
      .forEach(element => {

        element.addEventListener('click', e => {
          e.preventDefault();
          if (this.#isButton(e.target) && e.target.value === 'Cancel') {
            console.log(e.target.value);
            this.#form.reset();
            this.#view.showList();
          } else if (this.#isButton(e.target) && e.target.value === 'Submit') {
            console.log('submit', e.target.parentNode.getAttribute('method'));
            this.#handleCreateSubmit(e.target.parentNode.getAttribute('method'));
          }
        });

      });

      // for nav
      document.querySelector('#list div.button').addEventListener('click', () => {
        this.#view.showCreate();
      });

      document.querySelector('#list input').addEventListener('keyup', e => {
        console.log(e.target.value);
      });

      // for cards
      this.#cards.addEventListener('click', e => {
        const text = e.target.textContent;

        if (e.target.tagName === 'DIV' && e.target.className.includes('tag')) {
          this.#handleTagClick(text);
        } else if (e.target.tagName === 'DIV') {
          const id = Number(e.target.parentNode.getAttribute('data-id'));
          if (text === 'Delete') this.#handleCardDelete(id);
          else if (text === 'Edit') this.#handleCardEdit(id)
        }

      });
    }

    // for cards
    #displayCards() {
      this.#model.getContacts()
      .then(data => {
        console.log(data);
        this.#view.displayCards(data)
      })
      .catch(() => {
        this.#view.displayCards([]);
      });
    }

    #handleTagClick(tagName) {
      console.log('Tag: ', tagName);
    }

    #handleCreateSubmit(method) {
      /*
        Notes:
        - PUT does not work - ID isn't being submitted from event listener
        - may need to split up event listeners for #create / #edit
        - #edit has a DIFFERENT form, thus the method below needs to collect
        form inputs differently (currently only pulls from #create form)

        - need to incorporate UPDATE of #model.contacts data set, also
        
      */
      let api;
      if (method === 'POST') api = this.#model.add.bind(this.#model);
      else if (method === 'PUT') api = this.#model.update.bind(this.#model);
      
      console.log(method, api);
      api({
        full_name: this.#form['name'].value,
        email: this.#form['email'].value,
        phone_number: this.#form['phone'].value,
        tags: null,
      }, null)
      .then(() => {
        this.#form.reset();
        this.#view.removeAllCards();
        this.#view.displayCards(this.#model.contacts());
      }).finally(() => {
        this.#view.showList();
      });
    }

    #handleCardDelete(id) {
      if (this.#model.contacts().length === 1) this.#view.displayNoContacts();
      this.#view.deleteCard(id);
      this.#model.delete(id);
    }

    #handleCardEdit(id) {
      const contact = this.#model.contacts().filter(obj => obj.id === id)[0];
      this.#view.showEdit({
        name: contact.full_name,
        email: contact.email,
        phone: contact.phone_number,
      });
    }
  }

  return new Controller(new Model(), new View());
}


document.addEventListener('DOMContentLoaded', () => {
  ContactsApp();
});