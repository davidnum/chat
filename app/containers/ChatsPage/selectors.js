import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import chatsSchema from './schema';

const selectChatPageDomain = () => (state) => state.get('chat');
const selectGlobalState = () => (state) => state.get('global');

const selectChats = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['chats']),
);

const selectUsers = () => createSelector(
  selectGlobalState(),
  (globalState) => globalState.getIn(['users']).toJS(),
);

const selectMessages = () => createSelector(
  selectChatPageDomain(),
  (chatState) => chatState.getIn(['messages']).toJS(),
);

const makeSelectChats = () => createSelector(
  selectChats(),
  selectUsers(),
  selectMessages(),
  (chats, users, messages) => chats.size > 0 ? denormalize(Object.values(chats.toArray()), chatsSchema, { chats, users, messages }).sort(compare) : false,
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

const compare = (a, b) => b.last_message.created_at - a.last_message.created_at;

export {
  selectUsers,
  makeSelectChats,
  selectChatPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadedFromApi,
  selectChats,
};
