import React from 'react';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';
import PropTypes from 'prop-types';
import './Progress.less';

const colorSpinner = '#485';

const Progress = ({ show }) =>
  show ? (
    <div className="spinner">
      <div className="spinner__box">
        <CircularProgress size={60} color={colorSpinner} />
      </div>
    </div>
  ) : null;

Progress.propTypes = { show: PropTypes.bool.isRequired };

export default Progress;
