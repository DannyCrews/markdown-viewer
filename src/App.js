import React, { Component } from 'react';
import './App.scss';

import MarkdownPane from './MarkdownPane';
import PreviewPane from './PreviewPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Markdown Previewer</h1>
        </div>
        <div className='MarkdownPane'>
          <MarkdownPane />
        </div>
        <div className='PreviewPane'>
          <PreviewPane />
        </div>

      </div>
    );
  }
}

export default App;
