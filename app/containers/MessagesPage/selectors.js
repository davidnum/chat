import { createSelector } from 'reselect';

const selectMessagesPageDomain = () => (state) => state.get('messages');


const makeSelectMessagesPage = () => createSelector(
  selectMessagesPageDomain(),
  (messagesState) => messagesState.toJS()
);

export default makeSelectMessagesPage;
export {
  selectMessagesPageDomain,
};
