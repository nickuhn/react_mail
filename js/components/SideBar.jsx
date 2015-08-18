'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <aside>
        <h3>Folders</h3>
        <ul id="folder-list">
          <li><a href="linkToMainFolder">Stuff You Care About</a></li>
          <li><a href="linkToPromoFolder">Stuff From People Who Sold Your Personal Info</a></li>
          <li><a href="linkToSocialFolder">Random Stuff From People You Sorta Know</a></li>
          <li><a href="linkToSpamFolder">Canned Meat Product</a></li>
        </ul>
      </aside>
    );
  }
});
