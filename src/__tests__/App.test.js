import React from 'react';
import fetchMock from 'fetch-mock';
import App from '../App';
import Progress from '../components/Progress/Progress';

describe('App', () => {
  test('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  test('should render Progress component if state.spinner is true', () => {
    const component = shallow(<App />);
    component.setState({ spinner: true });
    expect(component.find(Progress).length).toBe(1);
  });

  test('should not render Progress if state.spinner is false', () => {
    const component = shallow(<App />);
    component.setState({ spinner: false });
    expect(component.find(Progress).length).toBe(0);
  });

  test.skip('getWeatherData method should return json response', () => {
    expect.assertions(1);
    //  const spy = jest.spyOn(App.prototype, 'getWeatherData');
    const component = shallow(<App />);
    fetchMock.mock('https://fake.com', 'GET', {
      any: 'value'
    });
    const location = { latitude: 50, longitude: 30 }; //  only this prop is need
    const response = component.instance().getWeatherData(location);
    const res = response;
    expect(res).toBe(true);
  });
});
