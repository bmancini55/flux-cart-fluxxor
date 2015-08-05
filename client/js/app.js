
var React = require('react');
var Fluxxor = require('fluxxor');

var CartStore = require('./stores/CartStore');
var CartActions = require('./actions/CartActions');
var CartApp = require('./components/CartApp.jsx');

var stores = {
  CartStore: new CartStore()
};

var flux = new Fluxxor.Flux(stores, CartActions);

// expose to window for non-flux interaction
window.CartApp = flux;

React.render(
  <CartApp flux={flux} />,
  document.getElementById('cart')
);