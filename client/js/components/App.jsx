/* eslint new-cap:0 */
/* eslint no-unused-lets:0 */

let Fluxxor     = require('fluxxor');
let React       = require('react');
let ItemList    = require('./ItemList.jsx');
let CartPopover = require('./CartPopover.jsx');

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
              <NavItem><CartPopover /></NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>
        <div className="container page-contents">
          <div className="row">
            <h1>Items</h1>
          </div>
          <ItemList />
        </div>
      </div>
    );
  }

});


module.exports = App;
