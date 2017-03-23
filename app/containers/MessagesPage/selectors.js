import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import messagesSchema from './schema';
import { selectUsers } from '../ChatsPage/selectors';

const selectMessagesPageDomain = () => (state) => state.get('messages');

const selectMessages = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.getIn(['messages']),
);

const makeSelectChatId = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('chatId'),
);

const makeSelectMessage = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('message'),
);

const makeSelectMessageSending = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('messageSending'),
);

const makeSelectMessagesLoading = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('loading'),
);

const makeSelectLoadingError = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.get('error'),
);

const makeSelectMessages = () => createSelector(
  selectMessages(),
  selectUsers(),
  makeSelectChatId(),
  denormalizeMessages,
);

const denormalizeMessages = (messages, users, chatId) => {
  if (messages.size > 0) {
    const ids = Object.values(messages.toArray()).filter((message) => message.chat_id === chatId).sort(compare);
    return denormalize(ids, messagesSchema, { messages, users });
  }

  return [];
};

const compare = (a, b) => a.created_at - b.created_at;

export {
  makeSelectMessages,
  makeSelectMessagesLoading,
  makeSelectLoadingError,
  makeSelectMessage,
  makeSelectChatId,
  makeSelectMessageSending,
};
