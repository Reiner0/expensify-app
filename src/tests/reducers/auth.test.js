import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: '123abc' }, action);
  expect(state.uid).toBeFalsy();
});
