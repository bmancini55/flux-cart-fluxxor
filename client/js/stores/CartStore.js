
let Fluxxor = require('fluxxor');
let _       = require('lodash');

let CartStore = Fluxxor.createStore({

  initialize: function() {
    this.loading = false;
    this.error = null;
    this.items = {};

    this.bindActions(
      'cart_add_item', this.onAddItem,
      'cart_remove_item', this.onRemoveItem,
      'cart_update_qty', this.onUpdateQty
    );
  },

  getQty: function() {
    var items = _.values(this.items);
    return items
      .map((item) => item.qty)
      .reduce((pre, cur) => pre + cur, 0);
  },

  getSubTotal: function() {
    let items = _.values(this.items);
    return items
      .map((item) => item.qty * item.price)
      .reduce((pre, cur) => pre + cur, 0);
  },

  onAddItem: function(item) {
    if(!this.items[item.id]) {
      this.items[item.id] = item;
    }

    if(!this.items[item.id].qty) {
      this.items[item.id].qty = 0;
    }

    this.items[item.id].qty += 1;
    this.emit('change');
  },

  onRemoveItem: function(id) {
    this.items[id].qty -= 1;
    if(this.items[id].qty === 0) {
      delete this.items[id];
    }
    this.emit('change');
  },

  onUpdateQty: function({ id, qty }) {
    this.items[id].qty = qty;
    if(this.items[id].qty === 0) {
      delete this.items[id];
    }
    this.emit('change');
  },

  getState: function() {
    return {
      items: this.items,
      qty: this.getQty(),
      subtotal: this.getSubTotal()
    };
  }

});

module.exports = CartStore;
