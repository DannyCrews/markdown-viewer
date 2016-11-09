import React, { Component } from 'react';
import './MarkdownPane.scss';

class MarkdownPane extends Component {
  render() {
    return (
      <div className="markdown-container">
        <h2>Markdown Pane</h2>
        <textarea
          className="textentry"
          onChange={ this.props.onChange }
          value={this.props.markdownText}

         />
      </div>
    );
  }
}

MarkdownPane.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  markdownText: React.PropTypes.string.isRequired
};

export default MarkdownPane;
