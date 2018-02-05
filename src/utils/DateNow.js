export default class DateNow extends Date {
  constructor() {
    super();
    this.now = new Date();
    this.daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    this.monthsOfYear = [
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
      'December'
    ];
  }

  getDate() {
    return this.now.getDate();
  }

  getHours() {
    return this.now.getHours();
  }

  getFullYear() {
    return this.now.getFullYear();
  }

  getHoursToString() {
    return this.now.toString().match(/\d+:\d+/)[0];
  }

  getDayToString() {
    return this.daysOfWeek[this.now.getDate()];
  }

  getMonthToString() {
    return this.monthsOfYear[this.now.getMonth()];
  }
}