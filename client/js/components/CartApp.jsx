
var Fluxxor = require('fluxxor');
var React = require('react');
var FluxMixin = Fluxxor.FluxMixin(React);
var WatchCartStore = Fluxxor.StoreWatchMixin("CartStore");

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var CartList = require('./CartList.jsx');

var CartApp = React.createClass({

  mixins: [FluxMixin, WatchCartStore],

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

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {
    var flux = this.getFlux();
    var items = this.state.items;
    var count = this.state.qty;
    return (
      <a href="#" onClick={this.onCartClick}>
        <span className="glyphicon glyphicon-shopping-cart"></span>
        <span>&nbsp;</span>
        <span>{count} items</span>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CartList items={items} flux={flux}></CartList>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </a>
    );
  },

  onCartClick: function(e) {
    e.preventDefault();
    this.open();
  }

});


module.exports = CartApp;
