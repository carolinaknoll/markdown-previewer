import React, {Component}  from 'react';
import marked from 'marked';
export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:
        `You can change the text in the box on the left to see how it will look as Markdown text on the right. Play around!
        \n # Markdown Heading
        \n ## Markdown Sub Heading
        \n [This is a link about hedgehogs (they are cool!)](https://giphy.com/explore/cute-hedgehog)
        \n You can also write some inline code...
        \n inline looks like this: \`let hedgehogHugs = 100;\`
        \n Or, maybe, a big chunk of code:
        \n \`\`\`javascript
        \n let hedgehogHugs = 100;
        \n hedgehogHugs = 10000;
        \n \`\`\`
        \n You can also have lists:
        \n * Hedgehogs
        \n * Kittens
        \n * Owls
        \n \n Blackquotes are really cool, too!
        \n > This is a small blackquote.
        \n > This is antoher small blackquote, below the first.
        \n This is a blackquote break.
        \n > This is a really long blackquote. It needs to be long, so let's use cat ipsum: Cat ipsum dolor sit amet, hunt by meowing loudly at 5am next to human slave food dispenser. Destroy couch scratch the furniture, pelt around the house and up and down stairs chasing phantoms. Meow! Go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat.
        \n You can also add emphasis to text by using **bold**, with **asterisks** or __underscores__.
        \n Italics use *asterisks* or _underscores_.
        \n And strikethrough uses two tildes. ~~Scratch this.~~
        \n That's it for the basics. Here is an image of a hedgehog drinking tea:
        \n ![Hedgehog drinking tea](https://troller.us/wp-content/uploads/2019/02/drawing-easy-hedgehog-80-best-hedgehog-drawing-images-in-2019-hedgehog-art-hedgehog-of-drawing-easy-hedgehog.jpg)`
    };
  }

  handleChange = (event) => {
    let customMarked = marked;

    customMarked.setOptions({
      breaks: true,
    });

    let markedText = customMarked(event.target.value);
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