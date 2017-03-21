import React from 'react';
import Loader from 'material-ui/CircularProgress';

const ChatsList = ({ loading, error, chats }) => {
  console.log(loading);
  if (loading) {
    return (<Loader />);
  }
  return (
    <div>
    dsadasdasd
    </div>
  );
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
