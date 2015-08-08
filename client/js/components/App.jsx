/* eslint new-cap:0 */
/* eslint no-unused-lets:0 */

let Fluxxor   = require('fluxxor');
let React     = require('react');
let ItemList  = require('./ItemList.jsx');
let CartModal = require('./CartModal.jsx');

let Bootstrap = require('react-bootstrap');
let { Navbar, CollapsibleNav, Nav, NavItem } = Bootstrap;

let App = React.createClass({

  mixins: [
    Fluxxor.FluxMixin(React)
  ],

  render: function() {
    return (
      <div>
        <Navbar toggleNavKey="navbar">
          <CollapsibleNav eventKey="navbar">
            <Nav navbar right>
              <NavItem><CartModal /></NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>
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
