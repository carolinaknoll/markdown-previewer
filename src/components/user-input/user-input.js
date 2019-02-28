import React, {Component}  from 'react';

export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: 'Test'
    };
  }

  handleChange = (event) => {
    this.setState({
      markdown: event.target.value
    });
  }

	render() {
    return (
      <div className="input-container">
        <div className="input-box">
          <textarea
            type="text"
            value={this.state.markdown}
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className="preview-box">{this.state.markdown}</div>
      </div>
    );
	}
};