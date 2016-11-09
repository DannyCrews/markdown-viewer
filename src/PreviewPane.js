import React, { Component } from 'react';
import './PreviewPane.scss';

class PreviewPane extends Component {
  render() {
    return (
      <div>
        <h2>Markdown Preview</h2>
        <div className="preview-container">
          <div className="preview-pane">
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewPane;
