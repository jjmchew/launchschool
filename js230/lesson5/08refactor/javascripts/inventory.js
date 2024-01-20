var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
      // $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      // console.log($('#inventory_item_template').remove().html());
      // console.log($('#inventory_item_template').html());
      // var $iTmpl = $("#inventory_item_template").remove();
      // this.template = $iTmpl.html();
      this.template = document.querySelector('#inventory_item_template').innerHTML;
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(parent) {
      var id = this.findID(parent),
          item = this.get(id);

      item.name = parent.querySelector(`input[name="item_name_${id}"]`).value;
      item.stock_number = parent.querySelector(`input[name="item_stock_number_${id}"]`).value;
      item.quantity = parent.querySelector(`input[name="item_quantity_${id}"]`).value;

      console.log(this.collection);
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();

      // var $item = $(this.template.replace(/ID/g, item.id));
      // $("#inventory").append($item);

      let templateFct = Handlebars.compile(this.template);
      let newTr = document.createElement('tr');
      newTr.setAttribute('id', `item_id_${item.id}`);
      newTr.innerHTML = templateFct(item);
      document.querySelector('#inventory').append(newTr);
    },
    findParent: function(e) {
      // return $(e.target).closest("tr");
      return e.target.parentNode.parentNode;
    },
    findID: function(parentNode) {
      return +parentNode.getAttribute('id').match(/\d+$/)[0];
    },
    deleteItem: function(e) {
      e.preventDefault();

      // var $item = this.findParent(e).remove();
      // this.remove(this.findID($item));

      let parent = e.target.parentNode.parentNode;
      this.remove(this.findID(parent));
      parent.remove();
    },
    updateItem: function(e) {
      var item = this.findParent(e);
      this.update(item);
    },
    bindEvents: function() {
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      document.querySelector('#add_item').addEventListener('click', e => {
        this.newItem(e);
      });
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      document.querySelector('#inventory').addEventListener('click', e => {
        if (e.target.tagName === 'A') this.deleteItem(e);
      });
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
      document.querySelector('#inventory').addEventListener('focusout', e => {
        console.log(e.target);
        if (e.target.tagName === 'INPUT') this.updateItem(e);
      });
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', ()=> {
  inventory.init();
});

// $($.proxy(inventory.init, inventory));
