import React, { Component } from 'react';
import './App.scss';
import Marked from 'marked';

import MarkdownPane from './MarkdownPane';
import PreviewPane from './PreviewPane';

class App extends Component {

  constructor(props) {
    super(props);
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.state = {
      markdownText: 'default input'
    }
  }

  onMarkdownChange(evt) {
    const { value } = evt.target;
    this.setState({
      markdownText: value
    });
  }

  rawMarkup() {
    var raw = this.state.markdownText;
    return { __html: raw };
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Markdown Previewer</h1>
        </div>
        <div className='MarkdownPane'>
          <MarkdownPane markdownText={this.state.markdownText} onChange={this.onMarkdownChange} />
        </div>
        <div className='PreviewPane' >
          <PreviewPane fetchProcessedMarkdown={() => this.rawMarkup()} />
        </div>

      </div>
    );
  }
}



export default App;
