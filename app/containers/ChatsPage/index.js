import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectChats, makeSelectError, makeSelectLoading, makeSelectLoadedFromApi } from './selectors';
import { loadChats } from './actions';
import ChatsList from '../../components/ChatsList';
import Wrapper from './Wrapper';

export class ChatsPage extends React.Component {

  componentDidMount() {
    if (!this.props.loadedFromApi) {
      this.props.loadChats();
    }
  }

  render() {
    const { loading, error, chats } = this.props;
    const chatsListProps = {
      loading,
      error,
      chats,
    };
    return (
      <Wrapper>
        <ChatsList {...chatsListProps} />
      </Wrapper>
    );
  }
}

ChatsPage.propTypes = {
  loadChats: React.PropTypes.func.isRequired,
  chats: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
  loadedFromApi: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  chats: makeSelectChats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  loadedFromApi: makeSelectLoadedFromApi(),
});

export default connect(mapStateToProps, { loadChats })(ChatsPage);
