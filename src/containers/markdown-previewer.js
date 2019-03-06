import React, {Component} from 'react';
import UserInput from '../components/user-input/user-input';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNightlyTheme: true,
    }
  }

  toggleTheme = (event) => {
    this.setState({isNightlyTheme: !this.state.isNightlyTheme});
  }

  render() {
    const {isNightlyTheme} = this.state;

    return (
      <div className={isNightlyTheme ? 'nightly-theme' : 'brightly-theme'}>
        <div className="content-container">
          <Header />

          <h3 className="toggle-theme" onClick={this.toggleTheme}>
            Switch to {isNightlyTheme ? 'brightly' : 'nightly'} theme
            <i className={isNightlyTheme ? 'fa fa-sun-o' : 'fa fa-moon-o'}></i>
          </h3>

          <UserInput />
        </div>

        <Footer />
      </div>
    );
  }
}
