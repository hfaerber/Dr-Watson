import * as actions from './';

describe('createUser', () => {
  it('should return an action object with type of CREATE_USER', () => {
    const mockUser = {id: 1579112830201,
      firstName:"ben",
      lastName:"beans",
      feeling:"happy"
    };
    const expectedAction = {
      type: 'CREATE_USER',
      user: mockUser
    }
    const result = actions.createUser(mockUser);
    expect(result).toEqual(expectedAction);
  })
})

describe('addMessage', () => {
  it('should return an action object with type ADD_MESSAGE', () => {
    const mockMessage = 'test message';
    const mockIsUser = false;
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage,
      isUser: mockIsUser
    };
    const result = actions.addMessage(mockMessage, mockIsUser);
  expect(result).toEqual(expectedAction);
  })
})

describe('clearMessages', () => {
  it('shoudl return an action object with type of CLEAR_MESSAGES', () => {
    const expectedAction = {
      type: 'CLEAR_MESSAGES'
    }
    const result = actions.clearMessages();
    expect(result).toEqual(expectedAction);
  })
})

describe('removeUser', () => {
  it('should return an action object with a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER',
    }
    const result = actions.removeUser();
    expect(result).toEqual(expectedAction);
  })
})

describe('hasErrored', () => {
  it('should return an action object with type of HAS_ERRORED', () => {
    const mockErrorMsg = 'Error has occured';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockErrorMsg
    }
    const result = actions.hasErrored(mockErrorMsg);
    expect(result).toEqual(expectedAction);
  })
})
