import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import messagesSchema from './schema';
import { selectUsers } from '../ChatsPage/selectors';

const selectMessagesPageDomain = () => (state) => state.get('messages');

const selectMessages = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.getIn(['messages']),
);

const selectChatId = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('chatId'),
);

const selectMessagesLoading = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('loading'),
);

const selectLoadingError = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('error'),
);

const makeSelectMessages = () => createSelector(
  selectMessages(),
  selectUsers(),
  selectChatId(),
  normalizeMessages,
);

const normalizeMessages = (messages, users, chatId) => {
  if (messages.length > 0) {
    const ids = Object.values(messages).filter((message) => message.chat_id === chatId);
    return denormalize(ids, messagesSchema, { messages, users });
  }

  return [];
};


export {
  makeSelectMessages,
  selectMessagesLoading,
  selectLoadingError,
};
