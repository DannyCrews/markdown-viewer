import React, { Component } from 'react';
import './styles/MarkdownPane.scss';

class MarkdownPane extends Component {
  render() {
    return (
      <div className="markdown-container">
        <div className='markdown-title'>
          <h2>Enter Markdown</h2>
        </div>
        <div className="text-pane">
          <textarea
            className="text-area"
            onChange={ this.props.onChange }
            value={this.props.markdownText}
           />
        </div>
      </div>
    );
  }
}

MarkdownPane.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  markdownText: React.PropTypes.string.isRequired
};

export default MarkdownPane;
