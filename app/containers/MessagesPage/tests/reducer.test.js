
import { fromJS } from 'immutable';
import messagesPageReducer from '../reducer';

describe('messagesPageReducer', () => {
  it('returns the initial state', () => {
    expect(messagesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
