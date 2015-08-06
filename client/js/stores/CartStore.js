
var Fluxxor = require('fluxxor');
var CartConstants = require('../constants/CartConstants');

var CartStore = Fluxxor.createStore({

  initialize: function() {
    this.loading = false;
    this.error = null;
    this.items = {};

    this.bindActions(
      CartConstants.CART_LOAD, this.onCartLoad,
      CartConstants.CART_LOAD_SUCCESS, this.onCartLoadSuccess,
      CartConstants.CART_ADD_ITEM, this.onAddItem,
      CartConstants.CART_REMOVE_ITEM, this.onRemoveItem
    );
  },

  getQty: function() {
    var items = this.items;
    return  Object
      .keys(this.items)
      .map(function(key) {
        var item = items[key];
        return item.qty;
      })
      .reduce(function(pre, cur) {
        return pre + cur;
      }, 0);
  },

  onCartLoad: function() {
    this.loading = true;
    this.emit('change');
  },

  onCartLoadSuccess: function(results) {
    this.loading = false;
    this.items = results.items;
    this.emit('change');
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

  getState: function() {
    return {
      items: this.items,
      qty: this.getQty()
    };
  }

});

module.exports = CartStore;