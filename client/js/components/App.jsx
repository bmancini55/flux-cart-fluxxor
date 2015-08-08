/* eslint new-cap:0 */
/* eslint no-unused-lets:0 */

let Fluxxor   = require('fluxxor');
let React     = require('react');
let ItemList  = require('./ItemList.jsx');
let CartModal = require('./CartModal.jsx');


let App = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React)
  ],

  render: function() {
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
                  <CartModal />
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
            <ItemList />
          </section>
        </div>
      </div>
    );
  }

});


module.exports = App;
