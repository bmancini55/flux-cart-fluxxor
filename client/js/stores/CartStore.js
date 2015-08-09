
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
      .map((item) => parseInt(item.qty) || 0)
      .reduce((pre, cur) => pre + cur, 0);
  },

  getSubTotal: function() {
    let items = _.values(this.items);
    return items
      .map((item) => (parseInt(item.qty) || 0) * item.price)
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
    delete this.items[id];
    this.emit('change');
  },

  onUpdateQty: function({ id, qty }) {
    let item = this.items[id];
    item.qtyInvalid = isNaN(parseInt(qty));
    item.qty        = qty;
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
