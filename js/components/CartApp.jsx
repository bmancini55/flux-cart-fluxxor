
var Fluxxor = require('fluxxor');
var React = require('react');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin("CartStore");

var CartItem = require('./CartItem.jsx');
var CartApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin],

  getInitialState: function () {
    return {};
  },

  getStateFromFlux: function () {
    var flux = this.getFlux();
    return flux.store('CartStore').getState();
  },

  componentDidMount: function() {
    this.getFlux().actions.loadCart();
  },

  render: function() {
    var items = this.state.items;
    return (
      <ul className="cart-items">
        {Object.keys(items).map(function(id) {
          return <li key={id} className="cart-item"><CartItem key={id} item={items[id]} /></li>;
        })}
      </ul>
    );
  },

});


module.exports = CartApp;