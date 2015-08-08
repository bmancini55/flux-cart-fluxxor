
var CartConstants = require('../constants/CartConstants');

module.exports = {
  addItem: function(item) {
    this.dispatch(CartConstants.CART_ADD_ITEM, item);
  },

  removeItem: function(id) {
    this.dispatch(CartConstants.CART_REMOVE_ITEM, id );
  }

};
