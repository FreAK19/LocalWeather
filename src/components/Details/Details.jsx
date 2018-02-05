import React from 'react';
import PropTypes from 'prop-types';
import './Details.less';

const Details = ({ details }) => {
  const { pressure, speed, temp_max, temp_min, humidity } = details;
  return (
    <div className="detail">
      <table className="detail__table">
        <tbody>
          <tr>
            <td>Wind Speed</td>
            <td>{speed} m/sec</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity} %</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{pressure} hPa</td>
          </tr>
          <tr>
            <td>Max</td>
            <td>{temp_max} C</td>
          </tr>
          <tr>
            <td>Min</td>
            <td>{temp_min} C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.any.isRequired
};

export default Details;
