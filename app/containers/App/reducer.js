import { fromJS } from 'immutable';
import { getUsers } from './usersMock';

const initialState = fromJS({
  currentUser: {
    id: 1,
  },
  users: getUsers(),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
