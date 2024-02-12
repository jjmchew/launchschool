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
      let contactData = {
          full_name: full_name,
          email: email,
          phone_number: phone_number,
          tags: tags,
      };

      return new Promise((res, rej) => {

        this.#apiSend({
          method: 'PUT',
          url: `/api/contacts/${String(id)}`,
          responseType: 'json',
          status: 201,
          data: contactData,
          contentType: 'application/json; charset=utf-8',
        })
        .then(contact => {
          console.log('updated ', id, contact);
          this.#dataUpdate(id, contactData);
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
    #cards;
    #create;
    #edit;
    #list;
    #screen;

    constructor() {
      this.#cards = this.#getElement('section#cards');
      this.#create = this.#getElement('#create');
      this.#edit = this.#getElement('#edit');
      this.#list = this.#getElement('#list');
      this.#screen = [this.#list, this.#edit, this.#create];
      this.#prepHandlebars();
    }

    // public methods
    addCard(data) {
      this.#cards.appendChild(this.#makeCard(data));
    }

    updateCard(data) {
      const oldCard = cards.querySelector(`#cards #card-${String(data.id)}`);
      this.#cards.replaceChild(this.#makeCard(data), oldCard);
    }

    displayCards(contacts) {
      if (contacts.length === 0) {
        this.displayNoContacts();
        return;
      }

      contacts.forEach(contact => {
        const tmp = document.createElement('div');
        tmp.innerHTML = this.#templates['cardTemplate'](contact);
        this.#cards.appendChild(tmp.firstElementChild);
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
      window.scrollTo(0, 0);

      document.querySelector('#edit form').setAttribute('data-id', String(info.id));
      document.querySelector('#editName').value = info.name;
      document.querySelector('#editEmail').value = info.email;
      document.querySelector('#editPhone').value = info.phone;
    }

    showList() {
      this.#show(this.#list);
    }

    displayNoContacts() {
      const msg = document.createElement('div');
      msg.classList.add('message');
      msg.appendChild(document.createTextNode('There are no contacts'));
      this.#cards.appendChild(msg);
    }

    // private methods
    #makeCard(data) {
      const newCard = document.createElement('div');
      newCard.innerHTML = this.#templates['cardTemplate'](data);

      return newCard.firstElementChild;
    }

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
    #createForm;
    #editForm;

    constructor(model, view) {
      this.#model = model;
      this.#view = view;

      this.#init();
    }

    #init() {
      this.#cards = document.querySelector('#cards');
      this.#createForm = document.querySelector('#create form');
      this.#editForm = document.querySelector('#edit form');
      this.#displayCards();
      this.#addEventListeners();
    }

    #isButton(target) {
      return target.className.includes('button');
    }

    #addEventListeners() {
      // #region for cancel buttons
      document.querySelectorAll('input[value="Cancel"]')
      .forEach(button => {
        button.addEventListener('click', e => {
          console.log('cancel: ', button);
          this.#handleCancel();
        });
      });
      // #endregion

      // #region for create
      document.querySelector('#create')
      .addEventListener('click', e => {
        e.preventDefault();
        if (this.#isButton(e.target) && e.target.value === 'Submit') {
          console.log('submit', e.target.parentNode.getAttribute('method'));
          this.#handleCreateSubmit();
        }
      });
      // #endregion

      // #region for edit
      document.querySelector('#edit')
      .addEventListener('click', e => {
        e.preventDefault();
        if (this.#isButton(e.target) && e.target.value === 'Submit') {
          let id = e.target.parentNode.getAttribute('data-id');
          console.log('submit', id);
          this.#handleEditSubmit(parseInt(id, 10));
        }
      });
      // #endregion

      // #region for nav
      document.querySelector('#list div.button').addEventListener('click', () => {
        this.#view.showCreate();
      });

      document.querySelector('#list input').addEventListener('keyup', e => {
        console.log(e.target.value);
      });
      // #endregion

      // #region for cards
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
      // #endregion
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

    #handleCancel() {
      this.#view.showList();

      // delay clearing forms until animation is complete
      setTimeout(() => {
        this.#editForm.reset();
        this.#createForm.reset();
      }, 500);
    }

    #handleTagClick(tagName) {
      console.log('Tag: ', tagName);
    }

    #handleCreateSubmit() {
      this.#model.add({
        full_name: this.#createForm['name'].value,
        email: this.#createForm['email'].value,
        phone_number: this.#createForm['phone'].value,
        tags: null,
      })
      .then(data => {
        this.#createForm.reset();
        this.#view.addCard(data);
      }).finally(() => {
        this.#view.showList();
      });
    }

    #handleEditSubmit(id) {
      this.#model.update({
        full_name: this.#editForm['name'].value,
        email: this.#editForm['email'].value,
        phone_number: this.#editForm['phone'].value,
        tags: null,
      }, id)
      .then(data => {
        this.#view.updateCard(data);
        this.#editForm.reset();
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
        id: id,
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