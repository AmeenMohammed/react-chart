import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { DateContainer, DateLabel } from './DatePickerElements';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ datevalue, changeDate, dateLabel }) => (
  <DateContainer>
    <DateLabel>{ dateLabel }</DateLabel>
    <DatePicker selected={datevalue} onChange={(date) => changeDate(date)} />
  </DateContainer>
);

DatePickerComponent.propTypes = {
  datevalue: PropTypes.instanceOf(Date),
  changeDate: PropTypes.func,
  dateLabel: PropTypes.string,
};

DatePickerComponent.defaultProps = {
  datevalue: new Date(),
  changeDate: () => {},
  dateLabel: '',
};

export default DatePickerComponent;
