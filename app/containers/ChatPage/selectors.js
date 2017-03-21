import { createSelector } from 'reselect';

const selectChatPageDomain = () => (state) => state.get('chat');

const makeSelectChats = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['chats']),
);

const makeSelectLoading = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.get('error'),
);

export {
  makeSelectChats,
  selectChatPageDomain,
  makeSelectLoading,
  makeSelectError,
};
