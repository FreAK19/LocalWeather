import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.less';
import Progress from './components/Progress/Progress';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

export default class App extends Component {
  error = null;
  state = {
    weather: {
      title: 'Kiev',
      temp: 10
    },
    spinner: false
  };

  render() {
    console.log(this.state.weather);
    const { spinner } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>

          {
            spinner ?
              <Progress show={this.state.spinner}/> :
              <WeatherContainer weather={this.state.weather} error={this.error}/>
          }

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
