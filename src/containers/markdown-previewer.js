import React, {Component} from 'react';
import UserInput from '../components/user-input/user-input';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default class MarkdownPreviewer extends Component {
  render() {
    return (
      <div>
        <div className="content-container">
          <Header />

          <h2>Markdown Previewer</h2>

          <UserInput />
        </div>
        <Footer />
      </div>
    );
  }
}
