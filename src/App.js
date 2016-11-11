import React, { Component } from 'react';
import Marked from 'marked';
import 'normalize.css';
import './styles/App.scss';
import MarkdownPane from './MarkdownPane';
import PreviewPane from './PreviewPane';

class App extends Component {

  constructor(props) {
    super(props);
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
    this.rawMarkup = this.processedMarkdown.bind(this);
    this.state = {
      markdownText: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`
    }
  }

  onMarkdownChange(evt) {
    const { value } = evt.target;
    this.setState({
      markdownText: value
    });
  }

  processedMarkdown() {
    var processed = Marked(this.state.markdownText, {sanitize: true});
    return { __html: processed };
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Markdown Previewer</h1>
        </div>
        <MarkdownPane
          className='MarkdownPane'
          markdownText={this.state.markdownText}
          onChange={this.onMarkdownChange}
        />
        <PreviewPane
          className='PreviewPane'
          fetchProcessedMarkdown={() => this.processedMarkdown()}
        />
      </div>
    );
  }
}



export default App;
