import { messages } from './messages'

describe('messages', () => {
  it('should return the inital state', () => {
    const expected = [];
    const result = messages(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of messages when type is ADD_MESSAGE', () => {
    const testState = [{isUser: true, message: 'new message'}];
    const action = {
      type: 'ADD_MESSAGE',
      isUser: false,
      message: 'added message'
    };
    const expected = [{isUser: true, message: 'new message'}, {isUser: false, message: 'added message'}];
    const result = messages(testState, action);
    expect(result).toEqual(expected);
  })

  it('should return an empty array when type is CLEAR_MESSAGES', () => {
    const testState = [{isUser: true, message: 'new message'}];
    const action = {
      type: 'CLEAR_MESSAGES'
    }
    const expected = [];
    const result = messages(testState, action);
    expect(result).toEqual(expected);
  })

})
