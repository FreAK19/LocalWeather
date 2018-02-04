import React from 'react';
import PropTypes from 'prop-types';
import Temperature from '../Temperature/Temperature';
import WeatherStatus from '../WeatherStatus/WeatherStatus'
import Details from '../Details/Details'
import DayTime from '../DayTime/DayTime'
import './WeatherContainer.less'

const WeatherContainer = ({weather, error}) => (
  <div className='weather'>
    <div className='weather__header flex'>
      <DayTime caption={weather.title}  error={error}/>
      <WeatherStatus icon='umbrella' />
    </div>
    <div className='weather__footer flex'>
      <Temperature temp={weather.temp}/>
      <Details datails={weather.details}/>
    </div>
  </div>
);

WeatherContainer.propTypes = {
  temp: PropTypes.number.isRequired,
  details: PropTypes.number.isRequired,
  error: PropTypes.object
};

export default WeatherContainer;
