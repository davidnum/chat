import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import chatsSchema from './schema';

const selectChatPageDomain = () => (state) => state.get('chat');

const selectChats = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['chats']),
);

const selectUsers = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['users']),
);

const selectMessages = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['messages']),
);

const makeSelectChats = () => createSelector(
  selectChats(),
  selectUsers(),
  selectMessages(),
  (chats, users, messages) => {
    console.log(denormalize(Object.values(chats), chatsSchema, { chats, users, messages }));
    return [];
  }
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
