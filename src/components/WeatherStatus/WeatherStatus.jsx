import React from 'react';
import PropTypes from 'prop-types';
import './WeatherStatus.less'

const WeatherStatus = ({icon}) => {
  const className = `pe-is-w-${icon} pe-4x pe-va`;
  return (
    <div className='weather__status'>
      <h3>Weather / Weather Status</h3>
      <p>
        <i className={className} />
      </p>
    </div>
)
};

WeatherStatus.propTypes = {icon: PropTypes.string.isRequired};

export default WeatherStatus;
