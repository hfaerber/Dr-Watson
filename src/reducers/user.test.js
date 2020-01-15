import { user } from './user';

describe('user', () => {
  it('should return the inital state', () => {
    const expected = null;
    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

})
