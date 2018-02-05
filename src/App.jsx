import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.less';
import Progress from './components/Progress/Progress';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

export default class App extends Component {
  state = {
    error: false,
    data: {
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
    },
    spinner: true
  };

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getWeatherData(position.coords);
        },
        error =>
          this.setState({
            spinner: false,
            error: error.message
          })
      );
    } else {
      this.setState({
        spinner: false,
        error: false,
        data: Object.assign(
          {},
          this.state.data,
          { name: 'Geolocation is not supported by this browser.' })
      })
    }
  }

  getWeatherData(location) {
    const { latitude: lat, longitude: lon } = location;
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`).then(response =>
      response.json().then(data =>
        this.setState({
          spinner: false,
          data
        })
      )
    );
  }

  render() {
    const { spinner } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          {spinner ? (
            <Progress show={this.state.spinner} />
          ) : (
            <WeatherContainer weather={this.state.data} error={this.state.error} />
          )}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
