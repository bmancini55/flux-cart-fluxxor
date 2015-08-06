
var Fluxxor = require('fluxxor');
var React = require('react');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin("CartStore");

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
    var count = this.state.qty;
    return (
      <a href="#" onClick={this.onCartClick}>
        <span className="glyphicon glyphicon-shopping-cart"></span>
        <span>&nbsp;</span>
        <span>{count} items</span>
      </a>
    );
  },

  onCartClick: function(e) {
    e.preventDefault();
    console.log('load the modal');
  }

});


module.exports = CartApp;
