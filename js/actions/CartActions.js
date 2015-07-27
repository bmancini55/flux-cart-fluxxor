
var CartConstants = require('../constants/CartConstants');
var client = require('../utils/CartClient');

module.exports = {
  loadCart: function() {
    this.dispatch(CartConstants.CART_LOAD);

    client.load(function(items) {
      this.dispatch(CartConstants.CART_LOAD_SUCCESS, { items: items });
    }.bind(this), function(error) {
      this.dispatch(CartConstants.CART_LOAD_FAILURE, { error: error });
    }.bind(this));
  },

  addItem: function(item) {
    this.dispatch(CartConstants.CART_ADD_ITEM, item);
  },

  removeItem: function(id) {
    this.dispatch(CartConstants.CART_REMOVE_ITEM, id );
  }

};