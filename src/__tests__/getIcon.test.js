import getIcon from '../utils/getIcon'

describe('getIcon', () => {

  test('should return string', () => {
    const type = typeof getIcon(200);
    expect(type).toBe('string')
  });

  test('should return correct icon base on id', () => {
    expect(getIcon(200)).toMatch('pe-is-w-severe-thunderstorm')
  })

});