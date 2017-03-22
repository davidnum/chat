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
  (chats, users, messages) => chats ? denormalize(Object.values(chats), chatsSchema, { chats, users, messages }) : false,
);

const makeSelectLoading = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.get('loading'),
);

const makeSelectLoadedFromApi = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.get('loadedFromApi')
);

const makeSelectError = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.get('error'),
);

export {
  selectUsers,
  makeSelectChats,
  selectChatPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadedFromApi,
};
