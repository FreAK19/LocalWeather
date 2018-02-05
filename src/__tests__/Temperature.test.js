import React from 'react';
import Temperature from '../components/Temperature/Temperature';

test('Temperature should render correctly', () => {
  const component = shallow(<Temperature temp={45} />);
  expect(component).toMatchSnapshot();
});

test('render correct temperature base on props', () => {
  const component = shallow(<Temperature />);
  component.setProps({ temp: 40 });
  expect(component.find('p').text()).toMatch('40');
});

test('should round temperature if it is float number', () => {
  const component = shallow(<Temperature temp={56.453} />);
  expect(component.find('p').text()).toMatch('56');
});
