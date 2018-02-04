import React from 'react';
import PropTypes from 'prop-types'
import './Details.less'

const Details = ({wind, pressure, humidity, min, max}) => (
 <div className='detail'>
   <table className='detail__table'>
     <tbody>
     <tr>
       <td>Wind Speed</td>
       <td>30 Km/h</td>
     </tr>
     <tr>
       <td>Humidity</td>
       <td>30 %</td>
     </tr>
     <tr>
       <td>Pressure</td>
       <td>30 hPa</td>
     </tr>
     <tr>
       <td>Max</td>
       <td>30 C</td>
     </tr>
     <tr>
       <td>Min</td>
       <td>30 C</td>
     </tr>
     </tbody>
   </table>
 </div>
);

Details.propTypes = {
  wind: PropTypes.number.isRequired
};

export default Details;
