import React from 'react';
import WeatherContainer from '../components/WeatherContainer/WeatherContainer'

test('WeatherContainer should render correctly', () => {
  const data = {
    main: {
      temp: 0,
        pressure: 0,
        humidity: 0,
        temp_min: 0,
        temp_max: 0
    },
    name: '',
      wind: {
      speed: 0
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'Weather Status'
      }
    ]
  };
  const component = shallow(<WeatherContainer error={false} weather={data}/>);
  expect(component).toMatchSnapshot();
});

test('WeatherContainer has two children elements', () => {
  const data = {
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    },
    name: '',
    wind: {
      speed: 0
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'Weather Status'
      }
    ]
  };
  const component = shallow(<WeatherContainer error={false} weather={data}/>);
  expect(component.children().length).toBe(2);
});
