
// cart_add_item
// cart_remove_item
// cart_update_qty

module.exports = {
  addItem: function(item) {
    this.dispatch('cart_add_item', item);
  },

  removeItem: function(id) {
    this.dispatch('cart_remove_item', id );
  },

  updateQty: function(id, qty) {
    this.dispatch('cart_update_qty', { id: id, qty: qty });
  }
};
