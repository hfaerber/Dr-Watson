import { errorMsg } from './errorMsg'

describe('errorMsg', () => {
  it('should return the inital state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error message when type is HAS_ERRORED', () => {
    const testState = '';
    const action = {
      type: 'HAS_ERRORED',
      errorMsg: 'test error'
    };
    const expected = 'test error';
    const result = errorMsg(testState, action);
    expect(result).toEqual(expected);
  })

})
