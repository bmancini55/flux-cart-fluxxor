
let Fluxxor = require('fluxxor');
let React = require('react');

let CartItem = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React)
  ],

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    let item = this.props.item;
    let qty  = this.props.item.qty;
    return (
      <div className="cart-item">
        <table className="cart-item-container">
          <tr>
            <td className="cart-item-img">
              <img className="img-responsive item-img" src={item.imagePath} />
            </td>
            <td className="cart-item-data">
              <table className="cart-item-details">
                <tr>
                  <td className="cart-item-details-header">{item.title}</td>
                  <td className="cart-item-delete">
                    <span
                      className="glyphicon glyphicon-remove"
                      onClick={this.onRemoveClick}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="cart-item-details-info" colspan="2">
                    <div className="cart-item-info cart-item-id">
                      <div className="info-label">Item</div>
                      <div className="info-value">{item.id}</div>
                    </div>
                    <div className="cart-item-info cart-item-price">
                      <div className="info-label">Price</div>
                      <div className="info-value">${item.price}</div>
                    </div>
                    <div className="cart-item-info cart-item-qty">
                      <div className="info-label">Qty</div>
                      <div className="info-value">
                        <input type="text" defaultValue={qty} onBlur={this.onQtyBlur} />
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  },

  onRemoveClick: function() {
    this.getFlux().actions.cart.removeItem(this.props.item.id);
  },

  onQtyBlur: function(e) {
    let value = parseInt(e.target.value);
    if(!isNaN(value)) {
      this.getFlux().actions.cart.updateQty(this.props.item.id, value);
    } else {
      this.forceUpdate();
    }
  }

});

module.exports = CartItem;