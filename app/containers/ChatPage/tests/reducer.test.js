
import { fromJS } from 'immutable';
import chatPageReducer from '../reducer';

describe('chatPageReducer', () => {
  it('returns the initial state', () => {
    expect(chatPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
