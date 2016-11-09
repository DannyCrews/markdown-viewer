import React, { Component } from 'react';
import './App.scss';
import Marked from 'marked';

import MarkdownPane from './MarkdownPane';
import PreviewPane from './PreviewPane';

class App extends Component {

  constructor(props) {
    super(props);
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
    this.state = {
      markdownText: 'default input'
    }
  }

  onMarkdownChange(evt) {
    console.log('event = ' + evt.target);
    const { value } = evt.target;
    this.setState({
      markdownText: value
    });
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
        <div className='PreviewPane'>
          <PreviewPane />
        </div>

      </div>
    );
  }
}



export default App;
