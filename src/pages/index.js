import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePickerComponent from '../components/DatePicker';
import { formatDate, numberOfMonths } from '../utils/functions';
import { Chart } from '../components/Chart';
import { Bar } from '../components/Bar';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const monthesCount = numberOfMonths(startDate, endDate);
  const chartHeight = 300;
  const barMargin = 30;
  const barWidth = 50;
  const width = monthesCount * (barWidth + barMargin);
  const chartRows = [];

  function getAnswers(dateFrom, dateTo) {
    axios.get(`${process.env.REACT_APP_ANSWERS_URL}?date_from=${formatDate(dateFrom)}&date_to=${formatDate(dateTo)}`, {
      headers: {
        authorization: 'Bearer SLSmxK17vjRInEWIiFQjwE1QIDfeSM',
      },
    })
      .then((res) => {
        setAnswers(res.data);
      }).catch((err) => {
        console.error(`Something went wrong !${err}`);
      });
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_QUESTIONS_URL}`)
      .then((res) => {
        setQuestions(res.data);
      }).catch((err) => {
        console.error(`Something went wrong !${err}`);
      });
    getAnswers(startDate, endDate);
  }, [startDate, endDate]);

  const handleDateChange = (date, type) => {
    if (type === 'from') {
      setStartDate(date);
      getAnswers(date, endDate);
    } else {
      setEndDate(date);
      getAnswers(startDate, date);
    }
  };
  for (let index = 0; index < monthesCount; index += 1) {
    chartRows.push(<Bar
      key={index}
      x={index * (barWidth + barMargin)}
      y={chartHeight - 10}
      width={barWidth}
      height={100}
    />);
  }
  console.table(questions);
  console.table(answers);

  return (
    <>
      <DatePickerComponent
        datevalue={startDate}
        changeDate={(date) => handleDateChange(date, 'from')}
        dateLabel="Date from: "
      />
      <DatePickerComponent
        datevalue={endDate}
        changeDate={(date) => handleDateChange(date, 'to')}
        dateLabel="Date to: "
      />
      <Chart height={chartHeight} width={width}>
        {chartRows}
      </Chart>
    </>
  );
};

export default Home;
