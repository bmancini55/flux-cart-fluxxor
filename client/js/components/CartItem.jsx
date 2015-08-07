
var Fluxxor = require('fluxxor');
var React = require('react');

var CartItem = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  getFlux: function() {
    return this.props.flux;
  },

  render: function() {
    var item = this.props.item;
    return (
      <div>
        <span className="item-id">{item.id}</span>
        <span className="item-title">{item.title}</span>
        <span className="item-price">{item.price}</span>
        <button onClick={this.onRemoveClick}>Remove</button>
      </div>
    );
  },

  onRemoveClick: function() {
    this.getFlux().actions.removeItem(this.props.item.id);
  }

});

module.exports = CartItem;