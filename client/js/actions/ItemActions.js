
let client = require('../utils/ItemClient');

// items_load_start
// items_load_fail
// items_load_success

module.exports = {
  loadItems: function() {
    this.dispatch('items_load_start');

    client.loadItems((err, items) => {
      if(err) this.dispatch('items_load_fail', err);
      else    this.dispatch('items_load_success', items);
    });

  }

};
