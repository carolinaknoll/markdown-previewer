import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Markdown Previewer</h1>
        <h3>Type in Markdown on the left box below to see your compiled Markdown text on the right box.</h3>
      </header>
    );
  }
}
