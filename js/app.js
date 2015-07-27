
var React = require('react');
var Fluxxor = require('fluxxor');

var CartStore = require('./stores/CartStore');
var CartActions = require('./actions/CartActions');

var stores = {
  CartStore: new CartStore()
};

var flux = new Fluxxor.Flux(stores, CartActions);
var CartApp = require('./components/CartApp.jsx');


React.render(
  <CartApp flux={flux} />,
  document.getElementById('react')
);