
let Fluxxor = require('fluxxor');
let _       = require('lodash');

let ItemStore = Fluxxor.createStore({

  initialize: function() {
    this.items = {};

    this.bindActions(
      'items_load_success', this.onItemsLoaded
    );
  },

  onItemsLoaded: function(items) {
    this.items = _.indexBy(items, 'id');
    this.emit('change');
  },

  getState: function() {
    return {
      items: this.items
    };
  }

});

module.exports = ItemStore;
