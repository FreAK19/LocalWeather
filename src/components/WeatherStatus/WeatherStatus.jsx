import React from 'react';
import PropTypes from 'prop-types';
import './WeatherStatus.less';

const WeatherStatus = ({ icon, status }) => {
  const className = `${icon} weather__icon`;
  return (
    <div className="weather__status">
      <h3>{status}</h3>
      <p>
        <i className={className} />
      </p>
    </div>
  );
};

WeatherStatus.propTypes = {
  icon: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default WeatherStatus;
