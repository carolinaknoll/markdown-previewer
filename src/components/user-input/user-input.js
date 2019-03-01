import React, {Component}  from 'react';
import marked from 'marked';
export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Test',
    };
  }

  handleChange = (event) => {
    let markedText = marked(event.target.value);
    document.getElementById('preview').innerHTML = markedText;

    this.setState({
      text: event.target.value,
    });
  }

	render() {
    return (
      <div className="input-container">
        <div className="input-box">
          <textarea
            type="text"
            id="editor"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div id="preview" className="preview-box"></div>
      </div>
    );
	}
};