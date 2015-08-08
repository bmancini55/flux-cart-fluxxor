
let React   = require('react');
let Fluxxor = require('fluxxor');
let stores  = require('./stores');
let actions = require('./actions');
let flux    = new Fluxxor.Flux(stores, actions);
let App     = window.App = require('./components/App.jsx');

React.render(
  <App flux={flux} />,
  document.getElementById('app')
);
