import React from 'react';
import PropTypes from 'prop-types';
import './Temperature.less'

const Temperature = ({ temp }) => (
  <div className='weather__temp'>
    <p>{temp}</p>
    <span>C</span>
  </div>
);

Temperature.propTypes = { temp: PropTypes.number.isRequired };

export default Temperature;
