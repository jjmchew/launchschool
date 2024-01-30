console.log('carshop');
// Note - solution for problem 6 included here (change in any filter reduces options in other select menus)

const cars = [
  { id: 1, make: 'Honda', image: '05carshop/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { id: 2, make: 'Honda', image: '05carshop/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { id: 3, make: 'Toyota', image: '05carshop/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { id: 4, make: 'Toyota', image: '05carshop/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { id: 5, make: 'Suzuki', image: '05carshop/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { id: 6, make: 'Audi', image: '05carshop/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { id: 7, make: 'Audi', image: '05carshop/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

(() => {
  class CarShop {
    #cars;
    #carsFiltered;
    #templates = {};
    #main;
    #form;
    #filter;
    #filters = {make: '', model: '', price: '', year: '', };
    #FILTER_OPTIONS = [
      {name: 'make', type: 'string', placeholder: 'All'},
      {name: 'model', type: 'string', placeholder: 'All'},
      {name: 'year', type: 'num', placeholder: 'Any'},
      {name: 'price', type: 'num', placeholder: 'Any'},
    ];
    #selectOptions = {};

    constructor(cars) {
      this.#cars = cars;
      this.#carsFiltered = this.#filterCars(this.#filters);
    }

    init() {
      this.#main = document.querySelector('main');
      this.#form = document.querySelector('header form');
      this.#filter = document.querySelector('header input[type="submit"]');
      this.#processTemplates();
      this.#displayCars();
      this.#displaySelect();
      this.#registerSubmit();
    }

    #processData(formData) {
      for (const pair of formData.entries()) {
        if (pair[1] !== '') this.#filters[pair[0]] = this.#filterValue(pair[0], pair[1]);
      }
    }

    #processTemplates() {
      const scripts = document.querySelectorAll('script[type="text/x-handlebars"]');
      scripts.forEach(tmpl => {
        this.#templates[tmpl['id']] = Handlebars.compile(tmpl['innerHTML']);
        tmpl.remove();
      });
    }

    #filterType(name) {
      return this.#FILTER_OPTIONS.find(obj => obj.name === name).type;
    }

    #filterValue(name, value) {
      if (this.#filterType(name) === 'num' && value !== '') {
        return parseInt(value, 10);
      } else return value;
    }

    #filterCars() {
      let filterData = this.#filters
      let data = this.#cars.filter(obj => {
        let match = true;
        for (let key in filterData) {
          if (filterData[key] !== '' && filterData[key] !== obj[key]) match = match && false;
        }
        return match;
      });
      return data;
    }

    #registerSubmit() {
      this.#form.addEventListener('submit', e => {
        e.preventDefault();
        let formData = new FormData(this.#form);
        this.#processData(formData);
        this.#displayCars();
        this.#displaySelect();
        this.#filter.setAttribute('disabled', true);
      });
    }

    #selectHandler(e) {
      let name = e.target.getAttribute('name');
      this.#filters[name] = this.#filterValue(name, e.target.value);
      this.#filter.removeAttribute('disabled');
      this.#carsFiltered = this.#filterCars();
      this.#displaySelect();
    }

    #registerSelects(register) {
      const selects = document.querySelectorAll('select');
      selects.forEach(select => {
        if (register) select.addEventListener('change', this.#selectHandler.bind(this));
        else select.removeEventListener('change', this.#selectHandler.bind(this));
      });
    }

    #clearCarDisplay() {
      let articles = document.querySelectorAll('article');
      articles.forEach(article => article.remove());
    }

    #displayCars() {
      let carSet = this.#carsFiltered;
      this.#clearCarDisplay();

      carSet.forEach(carObj => {
        const tmp = document.createElement('div');
        const carData = {
          id: carObj.id,
          car: carObj,
        };
        tmp.innerHTML = this.#templates['carTemplate'](carData);
        this.#main.appendChild(tmp.firstElementChild);
      });
    }

    #getSelectOptions() {
      this.#FILTER_OPTIONS.forEach(option => {
        this.#selectOptions[option.name] = this.#getOptions(option.name);
      });
    }

    #clearSelectDisplay() {
      this.#registerSelects(false);
      let dds = document.querySelectorAll('header form dl dd');
      dds.forEach(dd => dd.remove());
    }

    #addSelected(value, dd) {
      let option = dd.querySelector(`option[value="${value}"]`);
      option.setAttribute('selected', true);
    }

    #displaySelect() {
      this.#clearSelectDisplay();
      this.#getSelectOptions();

      this.#FILTER_OPTIONS.forEach(option => {
        let options = this.#selectOptions[option.name];
        const dd = document.createElement('dd');
        const selectData = {
          option: option.name,
          placeholder: option.placeholder,
          options: options,
        };
        dd.innerHTML = this.#templates['selectTemplate'](selectData);

        if (this.#filters[option.name] !== '') {
          this.#addSelected(this.#filters[option.name], dd);
        }

        const dt = document.querySelector(`label[for=${option.name}]`).parentElement;
        dt.insertAdjacentElement('afterend', dd);
      });

      this.#registerSelects(true);
    }

    #getOptions(selectName) {
      let arry = [];
      this.#carsFiltered.forEach(carObj => {
        arry.push(carObj[selectName]);
      });

      if (this.#filterType(selectName) === 'num') return this.#unique(arry.sort((a, b) => a - b));
      else return this.#unique(arry.sort());
    }

    #unique(arry) {
      let copy = [];
      arry.forEach((element, idx) => {
        if (element !== arry[idx + 1]) copy.push(element);
      });
      return copy;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new CarShop(cars).init();
  });
})();