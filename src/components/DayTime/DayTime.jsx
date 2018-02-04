import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './DayTime.less'

export default class DayTime extends Component {
  dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  state = {
    now: new Date()
  };

  static propTypes = { caption: PropTypes.string.isRequired };

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
      now: new Date()
    })
  }

  render() {
    const {now} = this.state;
    return (
      <div className='info'>
        {
          this.props.error ?
            <h3 className='info__caption'> Please turn on Geolocation on Browser </h3> :
            <h3 className='info__caption'>{this.props.caption}</h3>
        }
        <p>{this.dayOfWeek[now.getDay()]}</p>
        <p>
          {this.monthOfYear[now.getMonth()]} {now.getDate()}, {now.getFullYear()}
        </p>
        <span>
          {
            now.getHours() + ':' + now.getMinutes()
          }
          {now.getHours() > 12 ? ' PM' : ' AM'}</span>
      </div>
    )
  }
}