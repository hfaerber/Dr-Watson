import { errorMsg } from './errorMsg'

describe('errorMsg', () => {
  it('should return the inital state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });
})
