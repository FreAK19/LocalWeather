import React from 'react';
import WeatherStatus from '../components/WeatherStatus/WeatherStatus';

describe('WeatherStatus', () => {
  test('WeatherStatus should render correctly', () => {
    const component = shallow(<WeatherStatus icon="pe-is-w-rain" status="Rain" />);
    expect(component).toMatchSnapshot();
  });

  test('WeatherStatus should contain icon element with specific className', () => {
    const component = shallow(<WeatherStatus icon="pe-is-w-rain" status="Rain" />);
    const expected = component.find('i').hasClass('pe-is-w-rain weather__icon');
    expect(expected).toBe(true);
  });

  test('WeatherStatus will take correct status', () => {
    const component = shallow(<WeatherStatus icon="pe-is-w-rain-and-snow" status="Heavy rain and snow" />);
    const actual = component.find('h3').text();
    const expected = 'Heavy rain and snow';
    expect(actual).toMatch(expected);
  });
});
