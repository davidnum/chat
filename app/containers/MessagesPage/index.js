import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import { makeSelectMessages, makeSelectLoadingError, makeSelectMessagesLoading, makeSelectMessage } from './selectors';
import { loadMessages, inputMessage, sendMessage } from './actions';
import { Wrapper, InputWrapper, Input } from './styled';
import MessagesList from '../../components/MessagesList';

export class MessagesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadMessages(parseInt(this.props.params.chatId, 10));
  }

  render() {
    const { loading, error, messages, message, onChangeMessage, onSendClick } = this.props;
    const messagesListProps = {
      loading,
      error,
      messages,
    };
    return (
      <Wrapper>
        <MessagesList {...messagesListProps} />
        <InputWrapper>
          <Input placeholder="Напишите сообщение..." value={message} onChange={onChangeMessage}/>
          <button onClick={onSendClick}>SEND</button>
        </InputWrapper>
      </Wrapper>
    );
  }
}

MessagesPage.propTypes = {
  loadMessages: React.PropTypes.func.isRequired,
  onChangeMessage: React.PropTypes.func.isRequired,
  onSendClick: React.PropTypes.func.isRequired,
  messages: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array,
  ]),
  loading: React.PropTypes.bool,
  message: React.PropTypes.string,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  params: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
  loading: makeSelectMessagesLoading(),
  error: makeSelectLoadingError(),
  message: makeSelectMessage(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeMessage: (e) => dispatch(inputMessage(e.target.value)),
    loadMessages: (chatId) => dispatch(loadMessages(chatId)),
    onSendClick: () => dispatch(sendMessage()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
