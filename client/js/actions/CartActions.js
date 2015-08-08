
// cart_add_item
// cart_remove_item

module.exports = {
  addItem: function(item) {
    this.dispatch('cart_add_item', item);
  },

  removeItem: function(id) {
    this.dispatch('cart_remove_item', id );
  }
};
