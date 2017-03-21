import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Paper from 'material-ui/Paper';
import { makeSelectCurrentUser } from '../App/selectors';
import ListItem from '../../components/ListItem';

export class ChatListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const chat = this.props.item;
    const content = (
      <Paper>
        {chat.last_message.text}
      </Paper>
    );
    return (
      <ListItem key={chat.id} item={content} />
    );
  }
}

ChatListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.object,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(ChatListItem);
