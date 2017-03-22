import React from 'react';
import Loading from '../Loading';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import MessageListItem from '../../containers/MessageListItem';

const MessagesList = ({ loading, error, messages }) => {
  if (loading) {
    return <List component={Loading} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Error!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (messages !== false) {
    return <List bottom items={messages} component={MessageListItem} />;
  }

  return null;
};

MessagesList.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  messages: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default MessagesList;
