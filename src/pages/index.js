import React, { useState } from 'react';
import DatePickerComponent from '../components/DatePicker';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DatePickerComponent datevalue={startDate} changeDate={setStartDate} dateLabel="Date from: " />
      <DatePickerComponent datevalue={endDate} changeDate={setEndDate} dateLabel="Date to: " />
    </>
  );
};

export default Home;
