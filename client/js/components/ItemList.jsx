
let Fluxxor      = require('fluxxor');
let React        = require('react');
let ItemListItem = require('./ItemListItem.jsx');


let ItemList = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin('ItemStore')
  ],

  getInitialState: function () {
    return {};
  },

  getStateFromFlux: function () {
    let flux = this.getFlux();
    return {
      items: flux.store('ItemStore').getState()
    };
  },

  componentDidMount: function() {
    this.getFlux().actions.item.loadItems();
  },

  render: function() {
    let items = this.state.items.items;
    return (
      <div className="row shop-item-list">
        {
          Object.keys(items).map((key, idx) => {
            let results = [];
            results.push(<ItemListItem item={items[key]} />);

            if (idx % 2 === 1)
              results.push(<div className="clearfix visible-xs"></div>);

            if (idx % 3 === 2)
              results.push(<div className="clearfix visible-sm"></div>);

            if (idx % 4 === 3)
              results.push(<div className="clearfix visible-md"></div>);

            return results;
          })
        }
      </div>
    );
  }

});

module.exports = ItemList;
