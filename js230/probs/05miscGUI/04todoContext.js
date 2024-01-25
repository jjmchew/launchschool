console.log('todoContext');

todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

(()=> {
  class TodoApp {
    #todos;
    #main;
    #backdrop;
    #dialog;
    #nav;
    #currentId;

    constructor(todos) {
      this.#todos = todos;
    }

    init() {
      this.#main = document.querySelector('main');
      this.#backdrop = document.querySelector('aside .backdrop');
      this.#dialog = document.querySelector('aside .dialog');
      this.#nav = document.querySelector('nav');
      this.#displayTodos();
      this.#registerEvents();
    }

    #createTodo(todoObj) {
      const div = document.createElement('div');
      div.setAttribute('data-id', todoObj.id);
      div.classList.add('todo');

      const textNode = document.createTextNode(todoObj.title);
      div.appendChild(textNode);

      return div;
    }

    #displayTodos() {
      this.#todos.forEach(todoObj => {
        this.#main.appendChild(this.#createTodo(todoObj));
      })
    }

    #getTodoIndex(id) {
      return this.#todos.findIndex(obj => obj.id === id);
    }

    #deleteTodo(id) {
      console.log('deleteTodo', id);
      const idx = this.#getTodoIndex(this.#currentId);
      this.#todos.splice(idx, 1);

      let element = document.querySelector(`main div[data-id="${id}"]`);
      element.remove();
      this.#toggleDialog(false);

      this.#currentId = undefined;
    }

    #registerEvents() {
      // for dialog
      let aside = document.querySelector('aside');
      aside.addEventListener('click', e => {
        e.preventDefault();

        if (e.target.value === 'Delete') {
          console.log('Delete', this.#currentId);
          this.#deleteTodo(this.#currentId);
        } else if (e.target.value === 'Cancel') {
          console.log('Cancel');
          this.#toggleDialog(false);
          this.#currentId = undefined;
        }
      });

      // for show/hide context menu
      this.#main.addEventListener('mouseup', e => {
        e.preventDefault();

        if (e.button === 2) {
          // display nav (context menu)
          this.#nav.classList.add('show');
          this.#nav.style.top = `${e.clientY - 10}px`;
          this.#nav.style.left = `${e.clientX - 10}px`;

          // register id
          let id = parseInt(e.target.getAttribute('data-id'), 10);
          console.log(id);
          this.#currentId = id;
        }
      });

      this.#nav.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.tagName !== 'A') return;

        let action = e.target.getAttribute('data-id');
        console.log(action);
        if (action === 'delete') this.#toggleDialog(true, this.#currentId);
        this.#nav.classList.remove('show');
      });

      this.#nav.addEventListener('mouseleave', e => {
        this.#nav.classList.remove('show');
      });

      // prevent default context menu (R-click)
      this.#nav.addEventListener('contextmenu', e => {
        e.preventDefault();
      });
    }


    #toggleDialog(show, id=null) {
      if (show) {
        const title = this.#todos[this.#getTodoIndex(id)].title;
        const span = this.#dialog.querySelector('span');
        span.textContent = title;
        this.#backdrop.classList.add('show');
        this.#dialog.classList.add('show');
      } else {
        this.#backdrop.classList.remove('show');
        this.#dialog.classList.remove('show');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new TodoApp(todo_items).init();
  });
})();