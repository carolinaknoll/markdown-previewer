import React, {Component} from 'react';
import UserInput from '../components/user-input/user-input';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default class MarkdownPreviewer extends Component {
  render() {
    return (
      <div class="nightly-theme">
        <div className="content-container">
          <Header />
          <UserInput />
        </div>

        <Footer />
      </div>
    );
  }
}
