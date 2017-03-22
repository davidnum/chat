import React from 'react';
import Loading from '../Loading';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import ChatListItem from '../../containers/ChatListItem';

const ChatsList = ({ loading, error, chats }) => {
  if (loading) {
    return <List component={Loading} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Error!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (chats !== false) {
    return <List items={chats} component={ChatListItem} />;
  }

  return null;
};

ChatsList.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  chats: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default ChatsList;
