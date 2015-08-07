
var Fluxxor = require('fluxxor');
var React = require('react');

var CartItem = require('./CartItem.jsx');
var CartList = React.createClass({

  propTypes: {
    items: React.PropTypes.object.isRequired
  },

  render: function() {
    var flux = this.props.flux;
    var items = this.props.items;
    return (
      <ul className="cart-items">
        {Object.keys(items).map(function(id) {
          return <li key={id} className="cart-item"><CartItem key={id} item={items[id]} flux={flux} /></li>;
        })}
      </ul>
    );
  }

});

module.exports = CartList;
