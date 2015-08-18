'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <span><strong>Sender:</strong> {this.props.email.sender} </span>
        <span><strong>Subject:</strong> {this.props.email.subject} </span>
      </li>
    )
  }
});
