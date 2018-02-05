import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DayTime.less';
import DateNow from '../../utils/DateNow';

export default class DayTime extends Component {
  state = {
    now: new DateNow()
  };

  static propTypes = {
    caption: PropTypes.string.isRequired,
    error: PropTypes.any.isRequired
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this._tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _tick() {
    this.setState({
      now: new DateNow()
    });
  }

  render() {
    const { now } = this.state;
    return (
      <div className="info">
        {this.props.error ? (
          <h3 className="info__caption small"> Please turn on Geolocation on Browser </h3>
        ) : (
          <h3 className="info__caption">{this.props.caption}</h3>
        )}
        <p>{now.getDayToString()}</p>
        <p>
          {now.getMonthToString()} {now.getDate()}, {now.getFullYear()}
        </p>
        <span>
          {now.getHoursToString()}
          {now.getHours() >= 12 ? ' PM' : ' AM'}
        </span>
      </div>
    );
  }
}
