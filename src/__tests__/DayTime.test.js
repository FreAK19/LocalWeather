import React from 'react';
import DayTime from '../components/DayTime/DayTime';
import DateNow from '../utils/DateNow';

describe('DayTime', () => {
  test('should render correctly', () => {
    const date = new DateNow('02/05/2018 18:39');
    const component = shallow(<DayTime caption="Geolocation is not support" error={false} />);
    component.setState({ now: date });
    expect(component).toMatchSnapshot();
  });

  test('should render error message coerces to boolean true', () => {
    const component = shallow(<DayTime caption="Geolocation is not support" error="some error" />);
    const expected = 'Please turn on Geolocation on Browser';
    const actual = component.find('.info__caption').text();
    expect(actual).toMatch(expected);
  });

  test('should render PM if hour is over 12', () => {
    const component = shallow(<DayTime caption="Kiev" error={false} />);
    component.setState({ now: new DateNow('12/12/2015 12:00') });
    const text = component.find('span').text();
    const actual = /PM/g.test(text);
    expect(actual).toBe(true);
  });

  test('should render AM if hour is less then 12', () => {
    const component = shallow(<DayTime caption="Kiev" error={false} />);
    component.setState({ now: new DateNow('12/12/2015 6:00') });
    const text = component.find('span').text();
    const actual = /AM/g.test(text);
    expect(actual).toBe(true);
  });

  test('should be equal to expected object of Time', () => {
    const component = shallow(<DayTime caption="London" error={false} />);
    component.setState({ now: new DateNow('02/11/2018 16:20') });
    const expected = ['Saturday', '16:20', 'February'];
    const state = component.state();
    const actual = [state.now.getDayToString(), state.now.getHoursToString(), state.now.getMonthToString()];
    expect(actual).toMatchObject(expected);
  });
});
