import React from 'react';
import Progress from '../components/Progress/Progress'

test('Progress should render correctly', () => {
  const component = shallow(<Progress show/>);
  expect(component).toMatchSnapshot();
});

test('If show equals to false should render nothing', () => {
  const component = shallow(<Progress show={false}/>);
  expect(component.children().length).toBe(0);
});