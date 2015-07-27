
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
    this.items[item.id] = item;
    this.emit('change');
  },

  onRemoveItem: function(id) {
    delete this.items[id];
    this.emit('change');
  },

  getState: function() {
    return {
      items: this.items
    };
  }

});

module.exports = CartStore;