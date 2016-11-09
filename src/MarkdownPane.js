import React, { Component } from 'react';
import './MarkdownPane.scss';

class MarkdownPane extends Component {
  render() {
    return (
      <div className="markdown-container">
        <h2>Markdown Pane</h2>
        <textarea className="textentry" />
      </div>
    );
  }
}

export default MarkdownPane;
