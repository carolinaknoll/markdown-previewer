import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Markdown Previewer</h1>
        <h3 className="subtitle">Type in Markdown on the left box below to see your compiled Markdown text on the right box.</h3>
        <h3 className="subtitle">ProTip: You can use this <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a> while you type.</h3>
      </header>
    );
  }
}
