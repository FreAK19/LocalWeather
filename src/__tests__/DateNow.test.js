import DateNow from '../utils/DateNow';

describe('DateNow', () => {
  test('should return correct Day', () => {
    const date = new DateNow('02/04/2018');
    expect(date.getDayToString()).toMatch('Saturday')
  })

  test('should return correct Time', () => {
    const date = new DateNow('02/04/2018 22:23');
    expect(date.getHoursToString()).toMatch('22:23')
  });

  test('should return correct Day', () => {
    const date = new DateNow('02/04/2018');
    expect(date.getMonthToString()).toMatch('February')
  });

  test('without any parameter should return time now', () => {
    const date = new DateNow();
    const expected = new Date().toString().match(/\d+:\d+/)[0];
    expect(date.getHoursToString()).toBe(expected)
  })
});