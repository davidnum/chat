import React from 'react';
import ReactDom from 'react-dom';

export default function (ComposedComponent, property) {
  class AutoScroll extends React.Component {

    componentDidMount() {
      this.scrollToBottom();
    }

    componentWillUpdate(nextProps) {
      if (this.props[property] !== nextProps[property]) {
        this.scrollToBottom();
      }
    }

    componentDidUpdate() {
      this.scrollToBottom();
    }

    scrollToBottom() {
      if (this.node) {
        const container = ReactDom.findDOMNode(this.node);
        container.scrollTop = container.scrollHeight;
      }

    }

    render() {
      return (
        <ComposedComponent ref={(ref) => { this.node = ref; }} {...this.props} />
      );
    }
  }

  return AutoScroll;
}
