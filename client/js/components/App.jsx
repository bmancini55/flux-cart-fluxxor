/* eslint new-cap:0 */
/* eslint no-unused-lets:0 */

let Fluxxor        = require('fluxxor');
let React          = require('react');
let Modal          = require('react-bootstrap').Modal;
let Button         = require('react-bootstrap').Button;
let ItemList       = require('./ItemList.jsx');
let CartList       = require('./CartList.jsx');


let App = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin('CartStore', 'ItemStore')
  ],

  getInitialState: function () {
    return {};
  },

  getStateFromFlux: function () {
    let flux = this.getFlux();
    return {
      cart: flux.store('CartStore').getState(),
      items: flux.store('ItemStore').getState()
    };
  },

  componentDidMount: function() {
    this.getFlux().actions.item.loadItems();
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {
    let items = this.state.items.items;
    let cart  = this.state.cart;
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="src-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.onCartClick}>
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container page-contents">
          <section id="shop-items">
            <div className="row">
              <h1>Items</h1>
            </div>
            <ItemList items={items} />
          </section>
        </div>
      </div>
    );
  },

  onCartClick: function(e) {
    e.preventDefault();
    this.open();
  }

});


module.exports = App;
