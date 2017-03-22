import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectMessages } from './selectors';
import { loadMessages } from './actions';

export class MessagesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadMessages(parseInt(this.props.params.chatId, 10));
  }


  render() {
    return (
      <div>
      </div>
    );
  }
}

MessagesPage.propTypes = {
  loadMessages: React.PropTypes.func.isRequired,
  messages: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]),
  params: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
});


export default connect(mapStateToProps, { loadMessages })(MessagesPage);
