import React from 'react';
import PropTypes from 'prop-types';
import Temperature from '../Temperature/Temperature';
import WeatherStatus from '../WeatherStatus/WeatherStatus';
import Details from '../Details/Details';
import DayTime from '../DayTime/DayTime';
import getIcon from '../../utils/getIcon';
import './WeatherContainer.less';

const WeatherContainer = ({ weather, error }) => (
  <div className="weather">
    <div className="weather__header flex">
      <DayTime caption={weather.name} error={error} />
      <WeatherStatus icon={getIcon(weather.weather[0].id)} status={weather.weather[0].description} />
    </div>
    <div className="weather__footer flex">
      <Temperature temp={weather.main.temp} />
      <Details details={Object.assign({}, weather.main, weather.wind)} />
    </div>
  </div>
);

WeatherContainer.propTypes = {
  weather: PropTypes.object.isRequired,
  error: PropTypes.any
};

export default WeatherContainer;
