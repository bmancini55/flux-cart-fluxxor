
let React    = require('react');
let Fluxxor  = require('fluxxor');
let Modal    = require('react-bootstrap').Modal;
let Button   = require('react-bootstrap').Button;
let CartList = require('./CartList.jsx');

let CartModal = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin('CartStore')
  ],

  getInitialState: function () {
    return {};
  },

  getStateFromFlux: function () {
    let flux = this.getFlux();
    return {
      cart: flux.store('CartStore').getState()
    };
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {
    let cart = this.state.cart;
    return (
      <div onClick={this.onCartClick}>
        <span className="glyphicon glyphicon-shopping-cart"></span>
        <span>&nbsp;</span>
        <span>{cart.qty} items</span>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CartList cart={cart}></CartList>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },

  onCartClick: function(e) {
    e.preventDefault();
    this.open();
  }

});


module.exports = CartModal;