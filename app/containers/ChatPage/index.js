import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectChats, makeSelectError, makeSelectLoading } from './selectors';
import { loadChats } from './actions';
import ChatsList from '../../components/ChatsList';

export class ChatPage extends React.Component {

  componentDidMount() {
    this.props.loadChats();
  }

  render() {
    const { loading, error, chats } = this.props;
    const chatsListProps = {
      loading,
      error,
      chats,
    };
    return (
      <ChatsList {...chatsListProps} />
    );
  }
}

ChatPage.propTypes = {
  loadChats: React.PropTypes.func.isRequired,
  chats: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  chats: makeSelectChats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, { loadChats })(ChatPage);
