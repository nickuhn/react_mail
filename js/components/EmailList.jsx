'use strict';

var React = require('react');
var Email = require('./Email.jsx');

module.exports = React.createClass({
  render: function() {
    var yourEmails = this.props.emailList.map(function(email) {
      return <Email email={email} />
    });

    return (
      <article>
        <h3>Your Currently Selected Folder of Emails</h3>
        <ul id="email-list">
          {yourEmails}
        </ul>
      </article>
    );
  }
});
