import { user } from './user';

describe('user', () => {
  it('should return the inital state', () => {
    const expected = null;
    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a user object when type is CREATE_USER', () => {
    const mockUser = {id: 1579112830201,
      firstName:"ben",
      lastName:"beans",
      feeling:"happy"
    };
    const testState = null;
    const action = {
      type: 'CREATE_USER',
      user: mockUser
    };
    const expected = mockUser;
    const result = user(testState, action);
    expect(result).toEqual(expected);
  })

  it('should return null when type is REMOVE_USER', () => {
    const mockUser = {id: 1579112830201,
      firstName:"ben",
      lastName:"beans",
      feeling:"happy"
    };
    const testState = mockUser;
    const action = {
      type: 'REMOVE_USER'
    };
    const expected = null;
    const result = user(testState, action);
    expect(result).toEqual(expected);
  })
})
