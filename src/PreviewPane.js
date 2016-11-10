import React, { Component } from 'react';
import './PreviewPane.scss';

class PreviewPane extends Component {
  render() {
    return (
        <div className="container">
          <div>
            <h2>Markdown Preview</h2>
          </div>
          <div
            className="preview-pane"
            dangerouslySetInnerHTML={this.props.fetchProcessedMarkdown()}
          ></div>
        </div>
    );
  }
}

PreviewPane.propTypes = {
  fetchProcessedMarkdown: React.PropTypes.func.isRequired
};

export default PreviewPane;
