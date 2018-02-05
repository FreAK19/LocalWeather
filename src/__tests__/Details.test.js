import React from 'react';
import Details from '../components/Details/Details';

test('Details should render correctly', () => {
  const obj = {
    temp: 30,
    pressure: 100,
    humidity: 2330,
    temp_min: 30,
    temp_max: 35,
    speed: 10
  };
  const component = shallow(<Details details={obj} />);
  expect(component).toMatchSnapshot();
});
