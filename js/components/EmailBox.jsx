'use strict';

var React = require('react');
var EmailList = require('./EmailList.jsx');
var SideBar = require('./SideBar.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      emails: [
      {sender: 'Your BFF', subject: 'What is up!?' },
      {sender: 'Your Boss', subject: 'Why isn\'t the project done!?' },
      {sender: 'Your SO', subject: 'When are we going out!?' },
      {sender: 'Your Grandparents', subject: 'Is this thing working!?' }
      ]
    }
  },

  render: function() {
    return (
      <main className="emailBox">
        <h1>Welcome (insert name here) you have (insert number here) unread emails.</h1>
        <EmailList emailList={this.state.emails}/>
        <SideBar />
      </main>
    );
  }
});
