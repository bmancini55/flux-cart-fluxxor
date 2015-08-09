
let React     = require('react');
let Fluxxor   = require('fluxxor');
let CartList  = require('./CartList.jsx');
let Bootstrap = require('react-bootstrap');


let CartPopover = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin('CartStore')
  ],

  getInitialState: function () {
    return {
      show: false,
      target: null
    };
  },

  getStateFromFlux: function () {
    let flux = this.getFlux();
    return {
      cart: flux.store('CartStore').getState()
    };
  },

  toggle: function() {
    this.setState({
      show: !this.state.show
    });
  },

  render: function() {
    let cart = this.state.cart;
    let { Overlay } = Bootstrap;

    return (
        <div>
          <div onClick={this.toggle} ref='target'>
            <span className="glyphicon glyphicon-shopping-cart"></span>
            <span>&nbsp;</span>
            <span>{cart.qty} items</span>
          </div>
          <Overlay
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            target={() => React.findDOMNode(this.refs.target)}
            container={this}
            placement='bottom'
            rootClose={true}
          >
            <div className="cart-popover">
              <div className="cart-popover-title">Shopping Cart</div>
              <div className="cart-popover-content">
                <CartList cart={cart} />
              </div>
              <div className="cart-popover-footer">
                {() => {
                  if(cart.qty > 0) {
                    return <p>Subtotal: ${cart.subtotal}</p>;
                  }
                  else return '';
                }()}
              </div>
            </div>
          </Overlay>
        </div>
    );
  }

});


module.exports = CartPopover;
